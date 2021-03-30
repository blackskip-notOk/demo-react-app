import React from "react";

const Input = (props) => {
    return (
        <input
        type={props.type}
        className={props.className}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onBlur={props.onBlur}
        autoFocus={props.autoFocus}
        onChange={props.onChange}
        rows={props.rows}
        cols={props.cols} />
    );
}

export default Input;