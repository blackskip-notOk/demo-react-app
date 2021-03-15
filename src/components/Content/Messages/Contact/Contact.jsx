import React from 'react';
import Data from '../../../Common/Data-time/Data';
import s from './Contact.module.css';

const Contact = (props) => {
    return (
        <div className={s.div}>
            <span className={s.span}>{props.contact}</span>
            <Data data={props.data} divData={s.divData} />
        </div>
    );
}

export default Contact;