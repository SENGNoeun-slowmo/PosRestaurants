import React from "react";
import { Link } from "react-router-dom";
import "../styles/SlideNavbar.css";
function SlideNavbar(props) {
  const { title, id, path, dropdown } = props;
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className={`slide-bar ${!dropdown ? "open" : ""}`}>
          <ul>
            <li
              key={id}
              className="item"
              
            >
              <Link
                to={path}
                className="item"
              >
                {title}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SlideNavbar;
