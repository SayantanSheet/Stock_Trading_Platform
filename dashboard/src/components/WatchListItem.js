// import React from "react";
// import { useState, useContext } from "react";
// import {Tooltip, Grow} from '@mui/material';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import GeneralContext from "./GeneralContext.js";


// function WatchListItem({ stock }) {

//   const [showWatchListActions, setShowWatchListActions] = useState(false);

//   const handleMouseEnter = () => {
//     setShowWatchListActions(true);
//   };

//   const handleMouseLeave = () => {
//     setShowWatchListActions(false);
//   };

//   return(
//     <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//         <div className="item">
//             <p className={stock.isDown ? "down" : "up"}>
//                 {stock.name}
//             </p>
//             <div className="itemInfo">
//                 <span className="percent">{stock.percent}</span>
//                 {stock.isDown ?  <ArrowDownwardIcon className="down" /> : <ArrowUpwardIcon  className="up"/>}
//                 <span className="price">{stock.price}</span>
//             </div>
//         </div>
//         {showWatchListActions && <WatchListAction uid={stock.name}/> }

//     </li>
//   );
// }

// const WatchListAction =({uid})=>{

//     const generalContext = useContext(GeneralContext);  //importing the context as an object

//     const handleBuyClick = ()=>{
//       generalContext.openBuyWindow(uid);
//     }

//     return(
//         <span className="actions">
//             <span>
//                 <Tooltip
//                 title="Buy (B)"
//                 placement="top"
//                 arrow
//                 TransitionComponent={Grow}
//                 onClick={handleBuyClick}
//                 >
//                     <button className="buy">Buy</button>
//                 </Tooltip>

//                 <Tooltip
//                 title="Sell (S)"
//                 placement="top"
//                 arrow
//                 TransitionComponent={Grow}
//                 >
//                     <button className="sell">Sell</button>
//                 </Tooltip>

//                 <Tooltip
//                 title="Analytics (A)"
//                 placement="top"
//                 arrow
//                 TransitionComponent={Grow}
//                 >
//                     <button ><BarChartIcon className="icon"/></button>
//                 </Tooltip>

//                 <Tooltip
//                 title="More (M)"
//                 placement="top"
//                 arrow
//                 TransitionComponent={Grow}
//                 >
//                     <button className="action"><MoreHorizIcon className="icon"/></button>
//                 </Tooltip>
//             </span>
//         </span>
//     );
// }

// export default WatchListItem;
