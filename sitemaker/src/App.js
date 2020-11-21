import React from "react";
import "./index.css";
import Test from "./Test"
import Header from "./Header"
const dummyData = {
  //header
  headerStyle: null,
  title: "Example Title",
  //nav
  links: [
    { link: "Home" },
    { link: "About Us" },
    { link: "Product" },
    { link: "Contact" },
  ],
  // section
  sectionstyle: null,
  photos: [
    {
      photo:
        "https://images.pexels.com/photos/1091659/pexels-photo-1091659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      photo:
        "https://images.pexels.com/photos/2345374/pexels-photo-2345374.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      photo:
        "https://images.pexels.com/photos/5903191/pexels-photo-5903191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      photo:
        "https://images.pexels.com/photos/4576085/pexels-photo-4576085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ],
  section1: "",
  section2: "",
  // footer
  footerStyle: null,
  contactAndTitle: "Example Title",
  //address
  address: "108 E Garcia St Pharr, Texas 78577",
  email: "Preince560m@gmail.com",
  phone: "(956)-222-2222",
  icons: [{ iconImage: "", iconName: "" }],
  copyRights: "" /*function that gets the date of that year */,
};
function App() {
  console.log(dummyData); // Look at what you are getting back in the console
  return (
    <div className="App">
      <div className = "head">
        < Header dummyData = {dummyData}/>
      </div>
      {/* <h1>Hello its working</h1>
      <p>Chase Snider</p>
      <p>Kenan Dolic</p>
      <p>Brandon Santos</p>
      <p>Declan Casey</p> */}
    </div>
  );
}

export default App;
