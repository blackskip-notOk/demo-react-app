import React from "react";

const Figure = ({icon, className}) => {
    return (
        <figure className={`${icon} ${className}`} />
    );
}

export default Figure;