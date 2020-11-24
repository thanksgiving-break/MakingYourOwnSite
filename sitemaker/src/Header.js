import React from "react";
// import "./css/index.css";

function Header(props) {
  return (
    <div className="head">
      <h1>{props.title}</h1>
      <nav>
        { props.links.length > 0 
    ? props.links.map((item, index) => {
          return (
            <a href=".#" key={index}>
              {item.link}
            </a>
          );
        })
    : <p></p>}
      </nav>
    </div>
  );
}

export default Header;


/* 
    props.links.length > 0 
    ? props.links.map((item, index) => {
          return (
            <a href=".#" key={index}>
              {item.link}
            </a>
          );
        })
    : return ;

*/