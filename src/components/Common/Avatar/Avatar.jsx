import React from "react";

const Avatar = (props) => {
    let path = `${props.src}`;
    return (
        <img src={path} alt={props.alt} />
    )
}

export default Avatar;