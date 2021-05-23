import React, { FunctionComponent } from "react";

type ButtonType = {
    autoFocus?: boolean
    disabled?: boolean
    form?: string
    formAction?: any
    formEncType?: string
    formMethod?: string
    formNoValidate?: boolean
    formTarget?: string
    name?: string
    type?: 'button' | 'submit' | 'reset'
    // menu?: any //I don't know what is it!!!
    value?: string
    onClick?: any
    className: string
    span: string | any
    spanClass: string
}

const Button: FunctionComponent<ButtonType> = React.memo((props) => {
    return (
            <button
                autoFocus={props.autoFocus}
                disabled={props.disabled}
                form={props.form}
                formAction={props.formAction}
                formEncType={props.formEncType}
                formMethod={props.formMethod}
                formNoValidate={props.formNoValidate}
                formTarget={props.formTarget}
                name={props.name}
                type={props.type}
                // menu={props.menu}
                value={props.value}
                onClick={props.onClick}
                className={props.className}>
            <span className={props.spanClass}>{props.span}</span>
            </button>
    );
});

export default Button;