import React,{ useState} from 'react';
import {
    FaBars,
    FaUserAlt,
    FaUserSecret
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "../styling/App.css"

function Sidebar({children}) {

  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);

  const menuItems = [
    {
        path: "/",
        name: "My Profile",
        icon: <FaUserSecret/>
    },
    {
        path: "/users",
        name: "Data Users",
        icon: <FaUserAlt/>
       
    }
    

]
  return (
    <div>
          <div className="containers">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                   menuItems.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
        </div>
  )
}

export default Sidebar