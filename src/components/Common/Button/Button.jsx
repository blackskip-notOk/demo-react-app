import React from "react";

const Button = (props) => {

    return (
        <div className={props.className}>
            <button onClick = { props.onclick }>
                <span>{props.span}</span>
            </button>
        </div>
    );
}

export default Button;