require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3002;
const url = process.env.PUBLIC_MONGO_URL;
if (!url) {
  throw new Error("PUBLIC_MONGO_URL environment variable is not defined");
}

const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel');
const { WatchlistModel } = require('./model/WatchlistModel');
const { SignUp, LogIn, LogOut } = require('./utility/AuthController');
const { userVerification } = require('./utility/Middlewares');

const app = express();

app.use(bodyParser.json());
app.use(express.json());
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(",") 
  : ["http://localhost:3000", "http://localhost:3001", "http://127.0.0.1:3000", "http://127.0.0.1:3001"];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(cookieParser());

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await mongoose.connect(url)
    .catch(err => {
      console.log("server error: " + err);
    })
  console.log("DB connect")
});

app.get("/health", (req, res) => {
  res.send("API is up and running with latest changes!");
});

//FOR DATA FETCH FORM DATABASE
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get('/watchlist', async (req, res) => {
  let watchlistData = await WatchlistModel.find({});
  res.json(watchlistData);
})

//saving newOrder data to DB from dashboard
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: Number(req.body.qty),
    price: Number(req.body.price),
    mode: req.body.mode,
  });
  await newOrder.save();

  const { name, qty, price, mode } = req.body;
  let existingHolding = await HoldingsModel.findOne({ name: name });

  if (mode === "BUY") {
    if (existingHolding) {
      // Calculate new average price (optional but good for realism)
      const totalQty = existingHolding.qty + Number(qty);
      existingHolding.avg = ((existingHolding.avg * existingHolding.qty) + (Number(price) * Number(qty))) / totalQty;
      existingHolding.qty = totalQty;
      await existingHolding.save();
    } else {
      const newHolding = new HoldingsModel({
        name: name,
        qty: Number(qty),
        avg: Number(price),
        price: Number(price),
        net: "+0.00%",
        day: "+0.00%",
      });
      await newHolding.save();
    }
  } else if (mode === "SELL") {
    if (existingHolding) {
      if (existingHolding.qty >= Number(qty)) {
        existingHolding.qty -= Number(qty);
        if (existingHolding.qty === 0) {
          await HoldingsModel.deleteOne({ name: name });
        } else {
          await existingHolding.save();
        }
      } else {
        return res.status(400).send("Insufficient quantity to sell");
      }
    } else {
      return res.status(400).send("Holding not found for the stock");
    }
  }

  res.send("New order added successfully and holdings updated");
  console.log("newOrder data", req.body);
})

app.post("/signUp", SignUp);

app.post('/login', LogIn);

app.post('/logout', LogOut);

app.post('/verifyCookie', userVerification);
