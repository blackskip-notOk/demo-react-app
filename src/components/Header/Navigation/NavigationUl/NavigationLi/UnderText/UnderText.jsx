import React from "react";

const UnderText = React.memo(({className, undertext}) => {
    return (
        <div className={className}>
            {undertext}
        </div>
    );
});

export default UnderText;