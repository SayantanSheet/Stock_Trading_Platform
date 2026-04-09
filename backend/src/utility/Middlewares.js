const User = require("../model/UsersModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    console.log("Verification failed: Token cookie missing");
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      console.log("Verification failed: Invalid token", err.message);
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        const userName = user.name && user.name.trim() ? user.name : user.email.split("@")[0];
        console.log("Verification successful for user:", userName);
        return res.json({ status: true, user: { name: userName, email: user.email } });
      }
      else {
        console.log("Verification failed: User not found in database");
        return res.json({ status: false });
      }
    }
  });
};
