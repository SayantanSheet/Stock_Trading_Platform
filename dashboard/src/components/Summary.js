import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [userName, setUserName] = useState("");
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/verifyCookie`,
          {},
          { 
            withCredentials: true,
            headers: {
                Authorization: token ? `Bearer ${token}` : ""
            }
          }
        );
        console.log("verifyCookie response:", res.data);
        if (res.data.status && res.data.user) {
          const displayName = res.data.user.name;
          console.log("displayName:", displayName);
          setUserName(displayName.toUpperCase());
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();

    // Fetch holdings for summary
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/allHoldings`).then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  // Calculate summary values
  const totalInvestment = allHoldings.reduce((acc, stock) => acc + stock.qty * stock.avg, 0);
  const currentValue = allHoldings.reduce((acc, stock) => acc + stock.qty * stock.price, 0);
  const totalPnL = currentValue - totalInvestment;
  const pnlPercentage = totalInvestment !== 0 ? (totalPnL / totalInvestment) * 100 : 0;
  const isProfit = totalPnL >= 0;

  return (
    <>
      <div className="username">
        <h6>Hi, {userName}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={isProfit ? "profit" : "loss"}>
              {(totalPnL / 1000).toFixed(2)}k <small>{pnlPercentage >= 0 ? "+" : ""}{pnlPercentage.toFixed(2)}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{(currentValue / 1000).toFixed(2)}k</span>{" "}
            </p>
            <p>
              Investment <span>{(totalInvestment / 1000).toFixed(2)}k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
