import React from "react";
// import "./css/index.css";

function Footer(props) {
  console.log(props);
  return (
    <div className="foot">
      <address>{props.address}</address><br></br>
      <label for="email" id="email" >{props.email}</label><br></br>
      <label for="phone">{props.phone}</label><br></br>
      <input type="tel" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input><br></br>
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
