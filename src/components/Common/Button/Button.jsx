import React from "react";

const Button = (props) => {
    return (
        <div className={props.className}>
            <button disabled={props.disabled}
                onClick = {props.onClick}
                type={props.type}>
                <span>{props.span}</span>
            </button>
        </div>
    );
}

export default Button;