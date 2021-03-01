import React from "react";
import s from './Logo.module.css';
import logo from '../../../image/logo.png';

const Logo = () => {
    return (
        <img className={s.img} src={logo} alt={"site logo"} />
    );
}

export default Logo;