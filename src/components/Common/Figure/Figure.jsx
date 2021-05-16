import React from "react";

const Figure = React.memo(({icon, className, onClick}) => {
    return (
        <figure onClick={onClick} className={`${icon} ${className}`} />
    );
});

export default Figure;