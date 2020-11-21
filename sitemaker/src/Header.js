import React from "react"
import "./index.css";

function Header (props){
  console.log(props)
    return <div className = "head">
      
        <h1>{props.dummyData.title}</h1>
      
      <nav>
        <a href = ".#">{props.dummyData.links[0].link}</a>
        <a href = ".#">{props.dummyData.links[1].link}</a>
        <a href = ".#">{props.dummyData.links[2].link}</a>
        <a href = ".#">{props.dummyData.links[3].link}</a>
      </nav>

    </div>
}


export default Header