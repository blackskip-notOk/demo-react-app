import React from "react";

const Figure = ({icon, className, onClick}) => {
    return (
        <figure onClick={onClick} className={`${icon} ${className}`} />
    );
}

export default Figure;