import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {

  const [allHoldings,  setAllHoldings] = useState([]);

  //setting data and label for chart
  const labels = allHoldings.map( (el)=> el["name"])
  const data = {
    labels,
    datasets: [
      {
        label: 'Stock Price',
        data: allHoldings.map( (stock)=> stock.price ),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  }
 
  //fethcing holdings data from backend
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/allHoldings`)
    .then( (res)=>{
      setAllHoldings(res.data);
      //console.log(res);
    })
  }, []);

  // Calculate total values
  const totalInvestment = allHoldings.reduce((acc, stock) => acc + (stock.qty * stock.avg), 0);
  const currentValue = allHoldings.reduce((acc, stock) => acc + (stock.qty * stock.price), 0);
  const totalPnL = currentValue - totalInvestment;
  const pnlPercentage = totalInvestment !== 0 ? (totalPnL / totalInvestment) * 100 : 0;
  const isProfit = totalPnL >= 0;
  const pnlClass = isProfit ? "profit" : "loss";

  return (
    <>
      <h3 className="title">Holdings {allHoldings.length}</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.qty * stock.price;
              const isStockProfit = curValue - stock.avg * stock.qty >= 0.0;
              const stockProfClass = isStockProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={stockProfClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={stockProfClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {totalInvestment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {currentValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={pnlClass}>
            {totalPnL.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ({pnlPercentage.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
