import React from 'react';
import s from './Contact.module.css';
import Data from './Data';

const Contact = (props) => {
    return (
        <div className={s.div}>
            <span className={s.span}>{props.contact}</span>
            <Data />
        </div>
    );
}

export default Contact;