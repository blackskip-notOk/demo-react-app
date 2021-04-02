import React from 'react';
import { FormError } from './FormErrors';
import s from '../../Login/LoginForm/LoginForm.module.css';

const Input = ({ register, hookFormErrors, name, ...props }) => {
    return (
        <div className={s.divInput}>
            <label htmlFor={name}>{name}:</label>
            <input name={name}
                ref={register}
                type={props.type}
                placeholder={props.placeholder}
                className={`${props.errorClass} ${props.inputClass}`}
            />
            {/* {props.serverErrors && <FormError
                className={s.divError}
                icon={props.icon}
                message={props.serverErrorMessage}
                figure={s.figure} />} */}
        </div>
    );
}

export default Input;