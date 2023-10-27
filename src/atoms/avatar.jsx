import React from "react";

function Avatar ({imageSrc, description}){
    return (
        <div className="avatar">
        <img src={imageSrc} alt={description} width="250px" height="400px" />
        </div>
    );
}

export default Avatar;