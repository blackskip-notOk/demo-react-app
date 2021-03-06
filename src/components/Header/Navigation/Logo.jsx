import React from "react";
import s from './Logo.module.css';

const Logo = (props) => {
    let path = `${props.src}`;
    return (
        <img className={s.img} src={path} alt={props.alt} />
    );
}

export default Logo;