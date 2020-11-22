import React from "react";
import "./index.css";

function Footer(props) {
  const filteredNav = props.links.filter((item) => {
    return item.link !== "";
  });

  return (
    <div className="foot">
      {filteredNav.map((item, index) => {
        return (
          <nav>
            <a href=".#" key={index}>
              {item.link}
            </a>
          </nav>
        );
      })}
    </div>
  );
}

export default Footer;
