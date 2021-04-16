import React from "react";
import { NavLink } from "react-router-dom";
import s from './Logo.module.css';
import logotype from '../../../image/logo.png';

const Logo = (props) => {
    return (
        <NavLink to='/' target='_self'>
            <img className={s.img} src={logotype}
                alt='site-logo' title='Move to Home Page'/>
        </NavLink>
    );
}

export default Logo;