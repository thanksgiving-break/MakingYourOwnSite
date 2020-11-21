import React from "react";

function Body (props){
    const filteredPics = props.photos.filter(item => {
        return item.photo !== "";
    }) 

    const filteredSections = props.sections.filter(item =>{
        return item.section !== "";
    })

    return (
        <div>
            {filteredPics.map((item, index) =>{
               return <img src = {item.photo} alt={"testing"} key = {index}/>
            })}
            {filteredSections.map((item,index) =>{
                return <p key = {index}> {item.section}</p>
            })}
        </div>
    )
}



export default Body;