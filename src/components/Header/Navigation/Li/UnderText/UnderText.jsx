import React from "react";

const UnderText = (props) => {
    return (
        <div className={props.divText}>
            {props.undertext}
        </div>
    );
}

export default UnderText;