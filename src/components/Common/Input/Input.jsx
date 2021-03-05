import React from "react";

const Input = (props) => {
    return (
        <input
        type={props.type}
        className={props.className}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder} />
    );
}

export default Input;