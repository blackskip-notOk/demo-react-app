import React from "react";

const Figure = (props) => {
    return (
        <figure className={`${props.icon} ${props.className}`} />
    );
}

export default Figure;