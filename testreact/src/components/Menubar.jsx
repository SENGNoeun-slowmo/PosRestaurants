import React from "react";
import "../assets/styles/menu.css";

function Menubar(props) {
  const { title, children } = props;

  return (
    <li>
      <a href="">{title}</a>

      {children && (
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 sub-menu">
          <ul>
            {children.map((child, i) => (
              <li key={i}>
                <a href="">{child}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export default Menubar;
