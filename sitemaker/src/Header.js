import React from "react";
// import "./css/index.css";

function Header(props) {
  console.log(props, "this is the header");
  const linkArray = props.data.links;
  // console.log(linkArray[0].link);
  return (
    <div className="head">
      <h1>{props.data.titleInput}</h1>
      <nav>
        {linkArray.length !== 0 ? (
          linkArray.map((item, index) => {
            return (
              <a href=".#" key={index}>
                {item.link}
              </a>
            );
          })
        ) : (
          <p>there are no items</p>
        )}
      </nav>
    </div>
  );
}

export default Header;
