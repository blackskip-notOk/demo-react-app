import React from 'react';

const Input = ({ register, name, ...props }) => {
    return (
        <>
            <label htmlFor={props.id} form={props.form}>{name}:</label>
            <input ref={register}
                type={props.type}
                accept={props.accept}
                autoComplete={props.autoComplete}
                autoFocus={props.autoFocus}
                autoSave={props.autoSave}
                checked={props.checked}
                className={`${props.errorClass} ${props.inputClass}`}
                disabled={props.disabled}
                form={props.form}
                formAction={props.formAction}
                formEncType={props.formEncType}
                formMethod={props.formMethod}
                formNoValidate={props.formNoValidate}
                formTarget={props.formTarget}
                hidden={props.hidden}
                id={props.id}
                inputMode={props.inputMode}
                list={props.list}
                multiple={props.multiple}
                name={name}
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                src={props.src}
                title={props.title}
                value={props.value}
                onBlur={props.onBlur}
                onChange={props.onChange}
            />
        </>
    );
}

export default Input;