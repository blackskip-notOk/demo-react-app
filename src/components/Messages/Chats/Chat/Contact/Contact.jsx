import React from 'react';
import Avatar from '../Avatar/Avatar';
import s from './Contact.module.css';

const Contact = (props) => {
    return (
        <div className={s.div}>
            <Avatar />
            <span className={s.span}>{props.contact}</span>
        </div>
    );
}

export default Contact;