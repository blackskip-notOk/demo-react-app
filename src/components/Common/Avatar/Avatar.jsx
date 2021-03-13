import React from "react";

const Avatar = (props) => {
    return (
        <img src={props.src} alt={props.alt}
        className={props.className} />
    );
}

export default Avatar;