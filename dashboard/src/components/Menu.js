import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./UserWidget.css";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/verifyCookie`,
          {},
          { withCredentials: true }
        );
        if (res.data.status && res.data.user) {
          const user = res.data.user;
          const displayName = user.name || (user.email ? user.email.split("@")[0] : "User");
          setUserName(displayName.toUpperCase());
          setUserAvatar(displayName.substring(0, 2).toUpperCase());
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  const handleMenuClick = (index)=>{
    setSelectedMenu(index);
  }

  //opens the logout widget
  const handleProfileClick = ()=>{
    setIsProfileDropdownOpen( !isProfileDropdownOpen );
  }

  //closes the logout widget
  const handleCrossIconClick = ()=>{
    setIsProfileDropdownOpen( !isProfileDropdownOpen );
  }
//logout funtionality and redirecting to login
  const handleLogout = () => {
    console.log("handle log out clicked");
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/logout`, {}, { withCredentials: true })
      .then(() => {
        localStorage.removeItem('token');
        setTimeout(() => {
          window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/login`;
          window.history.pushState(null, "", window.location.href);
        }, 500);
      })
      .catch((err) => {
        console.error("Logout error:", err);
        // Fallback redirect even if backend call fails
        window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/logIn`;
      });
  }

  const menuClass = "menu";
  const activeMenuClass = "menu.selected";

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
            style={{textDecoration: "none"}}
            to="/"
            onClick={()=> handleMenuClick(0)}
            >
              <p className={selectedMenu===0 ? activeMenuClass : menuClass }>Dashboard</p>
            </Link>

          </li>

          <li>
            <Link
            style={{textDecoration: "none"}}
            to="/orders"
            onClick={()=> handleMenuClick(1)}
            >
               <p className={selectedMenu ===1 ?  activeMenuClass : menuClass }>Orders</p>
            </Link>
          </li>
          <li>
            <Link
            style={{textDecoration: "none"}}
            to="/holdings"
            onClick={()=> handleMenuClick(2)}
            >
               <p className={ selectedMenu===2 ?  activeMenuClass : menuClass }>Holdings</p>
            </Link>
            
          </li>
          <li>
            <Link
            style={{textDecoration: "none"}}
            to="/positions"
            onClick={()=> handleMenuClick(3)}
            >
               <p className={selectedMenu===3 ? activeMenuClass : menuClass }>Positions</p>
            </Link>
          </li>
          <li>
            <Link
            style={{textDecoration: "none"}}
            to="/funds"
            onClick={()=> handleMenuClick(4)}
            >
              <p className={selectedMenu===4 ? activeMenuClass : menuClass }>Funds</p>
            </Link>
          </li>
          <li>
            <Link
            style={{textDecoration: "none"}}
            to="/apps"
            onClick={()=> handleMenuClick(5)}
            >
                <p className={selectedMenu===5 ? activeMenuClass : menuClass }>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div 
           className="profile" 
           onClick={ ()=>handleProfileClick() }  
            
        >
          <div className="avatar">{userAvatar || "ZU"}</div>
          <p className="username">{userName || "USERID"}</p>
        </div>

        {isProfileDropdownOpen &&
        <div className="tooltip-widget">
          <div>
              <i className="fa-solid fa-xmark tooltip-widget-icon"
                  onClick={ ()=> handleCrossIconClick() }
              ></i>
          </div>
          <button onClick={()=>{handleLogout()} } className="logout-button">Log Out</button>
          
        </div>
        }
      </div>
    </div>
  );
};

export default Menu;
