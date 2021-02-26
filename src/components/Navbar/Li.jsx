import React from 'react';
import s from './Li.module.css';

const Li = (props) => {
    return (
        <li className={s.li}>
            <a href={props.href} target={props.target}>
                {props.notation}
            </a>
        </li>
    );
}

export default Li;