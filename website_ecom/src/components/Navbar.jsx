import React, { createContext, useState } from "react";
import apple from "../assets/images/apple1.png";
import { Link } from "react-router-dom";
import useSlide from "../Hooks/useSlide";
import SlideNavbar from "./SlideNavbar";
import math from "../assets/images/math.png";
import Search from "./Search";
import "../styles/Navbar.css";
// import "../styles/mega-menu.css";
import "../styles/phone.css";
import "../styles/Search.css";
import "../styles/Searchphone.css";
import "../styles/Bag.css";
import HomePage from "../Pages/HomePage";
export const Navbardata = createContext();
const Links = [
  {
    id: 1,
    title: "Store",
    path: "/",
    children: ["Shop the Latest", "Mac", "iPad", "iPhone", "Accessories"],
  },
  {
    id: 2,
    title: "Mac",
    path: "MacPage",
    children: [
      "MacBook Air",
      "MacBook Pro",
      "iMac",
      "Mac mini",
      "Mac Studio",
      "Mac Pro",
      "Displays",
      "Compare Mac",
      "Mac Support",
    ],
  },
  {
    id: 3,
    title: "iPad",
    path: "IpadPage",
    children: [
      "iPad Pro",
      "iPad Air",
      "iPad",
      "iPad mini",
      "Apple Pencil",
      "Keyboards",
      "Compare iPad",
      "iPad Support",
    ],
  },
  {
    id: 4,
    title: "iPhone",
    path: "/iphone",
    children: [
      "iPhone 15 Pro",
      "iPhone 15",
      "iPhone 14",
      "iPhone 13",
      "iPhone SE",
      "Compare iPhone",
      "Apple Trade In",
      "Carrier Deals",
      "iPhone Support",
      "iPhone 15 Pro",
      "iPhone 15",
      "iPhone 14",
      "iPhone 13",
      "iPhone SE",
      "Compare iPhone",
      "Apple Trade In",
      "Carrier Deals",
      "iPhone Support",
    ],
  },
  {
    id: 5,
    title: "Watch",
    path: "/watch",
    children: [
      "Apple Watch Series 9",
      "Apple Watch Ultra 2",
      "Apple Watch SE",
      "Apple Watch Nike",
      "Apple Watch Hermès",
      "Compare Watches",
      "Bands",
      "Apple Fitness+",
      "Watch Support",
    ],
  },
  {
    id: 6,
    title: "Vision",
    path: "/vision",
    children: ["Vision Pro", "Learn More", "Watch the Film"],
  },
  {
    id: 7,
    title: "AirPods",
    path: "/airpods",
    children: [
      "AirPods Pro (2nd generation)",
      "AirPods (2nd generation)",
      "AirPods (3rd generation)",
      "AirPods Max",
      "Compare AirPods",
      "AirPods Support",
    ],
  },
  {
    id: 8,
    title: "TV & Home",
    path: "/tv",
    children: [
      "Apple TV 4K",
      "HomePod",
      "HomePod mini",
      "TV App",
      "Siri Remote",
      "Compare TV & Home",
    ],
  },
  {
    id: 9,
    title: "Entertainment",
    path: "/entertainment",
    children: [
      "Apple One",
      "Apple TV+",
      "Apple Music",
      "Apple Arcade",
      "Apple Fitness+",
      "Apple News+",
      "Apple Podcasts",
      "Apple Books",
      "App Store",
    ],
  },
  {
    id: 10,
    title: "Accessories",
    path: "/accessories",
    children: [
      "Shop All",
      "Mac",
      "iPad",
      "iPhone",
      "Apple Watch",
      "AirPods",
      "TV & Home",
    ],
  },
  {
    id: 11,
    title: "Support",
    path: "/support",
    children: [
      "Get Help",
      "Service & Repair",
      "Resources",
      "My Support",
      "Community",
    ],
  },
];

function Navbar(props) {
  const [data, setData] = useState(Links);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSubMenuHovered, setIsSubMenuHovered] = useState(false);
  const [open, setSlide] = useState(false);
  const [bag, setBag] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [searchOpen, setSearchOpen] = useSlide(false);
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  const handleSlide = () => {
    setSlide(!open);
    setBag(false);
  };
  const bagHandle = () => {
    setBag(!bag);
    setSlide(false);
  };

  const handleMouseEnter = (id) => {
    setActiveMenu(id);
    setIsSubMenuHovered(true);
  };

  const handleMouseLeave = () => {
    // Only hide if mouse leaves both navbar and submenu
    setTimeout(() => {
      if (!isSubMenuHovered) {
        setActiveMenu(null);
      }
    }, 100);
  };

  const handleSubMenuMouseLeave = () => {
    setIsSubMenuHovered(false);
    setActiveMenu(null);
  };
  const handleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      {/* Navbar */}
      {/* <Navbardata.Provider value={{data}}> */}
      <div
        className={`container-fluid Navbar-bg ${activeMenu ? "open" : ""} ${
          open ? "active" : ""
        } ${bag ? "bag-open" : ""}`}
      >
        <div className="container">
          <div className="row">
            <nav className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 navbar">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <Link to="/" className="navbar-link apple-logo">
                    <img src={apple} alt="Apple" />
                  </Link>
                </li>

                {Links.map((link) => (
                  <li
                    key={link.id}
                    className="navbar-item"
                    onMouseEnter={(e) => handleMouseEnter(link.id, e)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={link.path}
                      className={`navbar-link ${
                        activeMenu === link.id ? "active" : ""
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}

                <li className="navbar-item">
                  <button className="navbar-icon-btn" onClick={handleSlide}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="navbar-icon"
                    >
                      <path d="m21 21-4.34-4.34" />
                      <circle cx="11" cy="11" r="8" />
                    </svg>
                  </button>
                </li>

                <li className="navbar-item">
                  <button className="navbar-icon-btn" onClick={bagHandle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="navbar-icon"
                    >
                      <circle cx="8" cy="21" r="1" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-new-arrivals-bar">
          <div className="row">
            <div className="new-arrivals-bar col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
              <span>
                Pay monthly at 0% APR when you choose to check out at Apple with
                Apple Card Monthly Installments
              </span>
          </div>
        </div>
      </div>
      {/* Mega Menu Dropdown */}
      {/* {`mega-menu ${
    activeMenu && !open ? "open" : ""
  }`} */}

      {/* <div
  className={`mega-menu 
    ${open ? "notopen" : activeMenu ? "open" : ""}
  `}
  onMouseEnter={() => setIsSubMenuHovered(true)}
  onMouseLeave={handleSubMenuMouseLeave}
>

        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
              {Links.map(
                (link) =>
                  link.children &&
                  activeMenu === link.id && (
                    <div key={link.id} className="mega-menu-content">
                      <div className="mega-menu-grid">
                        {link.children.map((child, i) => (
                          <div key={i} className="mega-menu-item">
                            <Link to={link.path} className="mega-menu-link">
                              {child}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div> 
      {/* phone-menu */}
      <div className=" container-fluid">
        <div className=" row">
          <div
            className={` col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 phone-menu ${
              dropdown ? "open" : ""
            } ${searchOpen ? "search-open" : ""} `}
          >
            <div className="phone-icon">
              <Link to="/" className="navbar-link apple-logo">
                <img src={apple} alt="Apple" />
              </Link>
            </div>
            <div className="menu-bar">
              <ul>
                {!searchOpen ? (
                  <>
                    {!dropdown ? (
                      <>
                        <li className="navbar-item">
                          <button
                            className="navbar-icon-btn"
                            onClick={handleSearch}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="navbar-icon"
                            >
                              <path d="m21 21-4.34-4.34" />
                              <circle cx="11" cy="11" r="8" />
                            </svg>
                          </button>
                        </li>
                        <li className="navbar-item">
                          <button
                            className="navbar-icon-btn"
                            onClick={handleSearch}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="navbar-icon"
                            >
                              <circle cx="8" cy="21" r="1" />
                              <circle cx="19" cy="21" r="1" />
                              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                            </svg>
                          </button>
                        </li>
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  ""
                )}

                <li>
                  <button
                    className="navbar-icon-btn"
                    onClick={() => {
                      if (searchOpen) {
                        handleSearch();
                        // return;
                      } else {
                        handleDropdown();
                      }
                    }}
                  >
                    {dropdown || searchOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokewidth="2"
                        strokelinecap="round"
                        strokelinejoin="round"
                        class="lucide lucide-x-icon lucide-x"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokewidth="2"
                        strokelinecap="round"
                        strokelinejoin="round"
                        class="lucide lucide-menu-icon lucide-menu"
                      >
                        <path d="M4 5h16" />
                        <path d="M4 12h16" />
                        <path d="M4 19h16" />
                      </svg>
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`drop-menu ${dropdown ? "active" : ""}`}>
        {data.map((Link) => {
          return <SlideNavbar dropdown={dropdown} key={Link.id} {...Link} />;
        })}
      </div>
      <div className={`search ${searchOpen ? "active" : ""} `}>search</div>

      <div className={`search-box ${open ? "active" : ""}`}>search box</div>
      <div className={`bag-box ${bag ? "active" : ""}`}>bag box</div>
      {/* <HomePage /> */}
      {/* </Navbardata.Provider> */}
    </>
  );
}

export default Navbar;
