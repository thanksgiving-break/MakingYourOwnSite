import React from "react";
// import "./css/index.css";

function Footer(props) {
  console.log(props);
  return (
    <div className="foot">
      <address>{props.address}</address>
      <br />
      <label for="email" id="email">
        {props.email}
      </label>
      <br />
      <label for="phone">{props.phone}</label>
      <br />

      <br />
      <nav>
        {props.links.length > 0 ? (
          props.links.map((item, index) => {
            return (
              <a href=".#" key={index}>
                {item.link}
              </a>
            );
          })
        ) : (
          <p></p>
        )}
      </nav>
    </div>
  );
}

export default Footer;
