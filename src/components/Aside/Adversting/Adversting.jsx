import React from "react";
import s from './Adversting.module.css';

const Adversting = (props) => {
    return (
        <article className={s.article}>
            <span className={s.span}>
                {props.id} {props.text}
            </span>
        </article>
    );
}

export default Adversting;