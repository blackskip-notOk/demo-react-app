import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { FormError } from './FormErrors';


const FormInput = (props) => {
    const hasError = props.formState.isDirty && props.errors;

    return (
    <div className={props.divInputClass}>
            <label htmlFor={props.name}>{props.name}</label>
            <input name={props.name}
                ref={props.ref}
                placeholder={props.placeholder}
                className={`${props.inputClass}
                    ${(hasError ? props.errorClass : "")}`} />
            <ErrorMessage
                errors={props.errors}
                name={props.name}
                render={({message}) => <FormError
                    className={props.divErrorClass}
                    icon={props.icons[2].icon}
                    figure={props.figureClass}
                    message={message} />} />
        </div>
    );
}

export default FormInput;