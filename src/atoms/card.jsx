import React from "react";

import "../styles/card.css"

function Card ({title, content}){
    return(
        <div className="card-box">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Card;