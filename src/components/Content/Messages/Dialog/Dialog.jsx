import React from 'react';
import s from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={s.div}>
            <p>
                {props.id} {props.message}
            </p>
        </div>
    );
}

export default Dialog;