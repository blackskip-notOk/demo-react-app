import React from "react";

const Button = (props) => {
    return (
        <div className={props.className}>
            <button disabled={props.disabled} onClick = {props.onClick}>
                <span>{props.span}</span>
            </button>
        </div>
    );
}

export default Button;