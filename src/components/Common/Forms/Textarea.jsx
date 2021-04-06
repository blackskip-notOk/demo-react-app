import React from 'react';

const Textarea = ({ register, name, ...props }) => {
    return (
        <div>
            <textarea name={name}
                ref={register}
                placeholder={props.placeholder}
                className={`${props.errorClass} ${props.textareaClass}`}
                rows={props.rows}
                cols={props.cols}
            />
        </div>
    );
}

export default Textarea;