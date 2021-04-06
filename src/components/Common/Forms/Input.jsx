import React from 'react';

const Input = ({ register, name, ...props }) => {
    return (
        <div className={props.divInputClass}>
            <label htmlFor={name}>{name}:</label>
            <input id={props.id}
                name={name}
                ref={register}
                onBlur={props.onBlur}
                onChange={props.onChange}
                value={props.value}
                autoFocus={props.autoFocus}
                type={props.type}
                placeholder={props.placeholder}
                className={`${props.errorClass} ${props.inputClass}`}
                rows={props.rows}
                cols={props.cols}
            />
        </div>
    );
}

export default Input;