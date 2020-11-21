import React from "react";
import "./index.css";

function Header(props) {
  const filteredLinks = props.links.filter((item) => {
    return item.link !== "";
  });

  return (
    <div className="head">
      <h1>{props.title}</h1>
      <nav>
        {filteredLinks.map((item, index) => {
          return (
            <a href=".#" key={index}>
              {item.link}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export default Header;
