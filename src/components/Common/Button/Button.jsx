import React from "react";

const Button = (props) => {
    return (
            <button
                autofocus={props.autofocus}
                disabled={props.disabled}
                form={props.form}
                formAction={props.formAction}
                formEncType={props.formEncType}
                formMethod={props.formMethod}
                formNoValidate={props.formNoValidate}
                formTarget={props.formTarget}
                name={props.name}
                type={props.type}
                menu={props.menu}
                value={props.value}
                onClick={props.onClick}
                className={props.className}>
            <span className={props.spanClass}>{props.span}</span>
            </button>
    );
}

export default Button;