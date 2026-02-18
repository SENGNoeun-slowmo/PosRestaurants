import React, { useState } from "react";
import "../assets/styles/menu.css";
import Menubar from "./Menubar";
import "../assets/styles/menu.css";
import apple from "../assets/images/apple.png";
import search from "../assets/images/search.png";
import bag from "../assets/images/bag.png";
import menu_bar from "../assets/images/burger-bar.png";
import menu_math from "../assets/images/math.png";
import useDropDown from "./useDropDown"
import Search from "./Search";

const menulist = [
  {
    id: 1,
    title: "Store",
    children: [
      "Shop the Latest",
      "Mac",
      "iPad",
      "iPhone",
      "Accessories",
    ],
  },
  {
    id: 2,
    title: "Mac",
    children: [
      "MacBook Air",
      "MacBook Pro",
      "iMac",
      "Mac mini",
      "Mac Studio",
      "Mac Pro",
    ],
  },
  {
    id: 3,
    title: "iPad",
    children: [
      "iPad Pro",
      "iPad Air",
      "iPad",
      "iPad mini",
      "Apple Pencil",
      "Keyboards",
    ],
  },
  {
    id: 4,
    title: "iPhone",
    children: [
      "iPhone 15 Pro",
      "iPhone 15",
      "iPhone 14",
      "iPhone SE",
    ],
  },
  {
    id: 5,
    title: "Watch",
    children: [
      "Apple Watch Series 9",
      "Apple Watch Ultra 2",
      "Apple Watch SE",
    ],
  },
  {
    id: 6,
    title: "Vision",
    children: ["Apple Vision Pro"],
  },
  {
    id: 7,
    title: "AirPods",
    children: [
      "AirPods Pro",
      "AirPods (3rd generation)",
      "AirPods Max",
    ],
  },
  {
    id: 8,
    title: "TV & Home",
    children: [
      "Apple TV 4K",
      "HomePod",
      "HomePod mini",
    ],
  },
  {
    id: 9,
    title: "Entertainment",
    children: [
      "Apple Music",
      "Apple TV+",
      "Apple Arcade",
      "Apple Fitness+",
      "Apple Podcasts",
      "Apple Books",
    ],
  },
  {
    id: 10,
    title: "Accessories",
    children: [
      "Cases & Protection",
      "Chargers",
      "Cables",
      "Headphones",
    ],
  },
  {
    id: 11,
    title: "Support",
    children: [
      "AppleCare+",
      "Repairs",
      "Contact Support",
      "User Guides",
    ],
  },
];


function Menulist() {
  const [open,setOpen]=useState(false);
  const [show,DropDown]=useDropDown(false);
  return (
    <>
      <div className="container-fluid">
        <div className="row menu-text">
          <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 menu-bar">
            <ul>
              {/* Apple logo */}
              <li>
                <a href="#">
                  <img src={apple} alt="Apple" className="menu-icon" />
                </a>
              </li>

              {/* Menu items */}
              {menulist.map((menu) => (
                <Menubar key={menu.id} title={menu.title} children={menu.children} />
                
              ))}
              
              {/* Search */}
             
              <li>
                <button className="menu-btn" onClick={DropDown}>
                  <img src={search} alt="Search" className="menu-icon-search" />
                </button>
              </li>
               
              {/* Bag */}
              <li>
                <a href="#">
                  <img src={bag} alt="Bag" className="menu-icon-bag" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
     <div className="row">
      
       {show?<div className="box-search"><Search/> </div>:null}
     
     </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="phone-menu">
            <div className="icon-box">
              <a href="#">
                <img src={apple} alt="Apple" className="menu-icon" />
              </a>
            </div>
            <div className="icon-box1">
              <a href="#">
                <img src={search} alt="Search" className="menu-icon-search" />
              </a>
              <a href="#">
                <img src={bag} alt="Search" className="menu-icon-bag" />
              </a>
              <button className="menu-btn" onClick={() => setOpen(!open)}>
                <img src={open ? menu_math :menu_bar } alt="Menu Icon" className="menu-icon" />
              </button>

            </div>
          </div>
        </div>
      </div>
      <div className=" container-fluid">
         <div className="row">
          <div className={`col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  menu-left ${open ? "open" : ""}`}>
              {menulist.map((menu) => (
                <Menubar key={menu.id} title={menu.title} children={menu.children} />
                
              ))}
            
          </div>
         </div>
      </div>
    </>
  );
}

export default Menulist;
