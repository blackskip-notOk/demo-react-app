import React from "react";
import s from './Logo.module.css';

const Logo = (props) => {
    return (
        <img className={s.img} src={props.src} alt={props.alt} />
    );
}

export default Logo;