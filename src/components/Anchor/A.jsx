import React from "react";
import s from './A.module.css';

const A = (props) => {
    return (
        <a className={s.a} href={props.href}>
            {props.anchor}
        </a>
    );
}

export default A;