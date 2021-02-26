import React from "react";
import s from './Logo.module.css';
import logo from '../../../image/logo.png';

const Logo = () => {
    return (
        <li className={s.li}>
            <img className={s.img} src={logo} alt={"site logo"} />
        </li>
    );
}

export default Logo;