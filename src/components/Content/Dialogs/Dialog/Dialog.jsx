import React from 'react';
import s from './Dialog.module.css';

const Dialog = React.memo((props) => {
    return (
        <div className={s.dialogDiv}>
            <p>{props.id} {props.message}</p>
        </div>
    );
});

export default Dialog;