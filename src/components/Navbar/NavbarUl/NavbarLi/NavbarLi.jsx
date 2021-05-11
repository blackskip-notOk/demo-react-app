import React from "react";
import { NavLink } from 'react-router-dom';
import s from './NavbarLi.module.css';

const NavbarLi = ({pathway, target, notation}) => {
    return (
        <li className={s.li}>
            <div className={s.div}>
                <NavLink className={s.link}
                    to={pathway}
                    target={target}
                    activeClassName={s.active}>
                        {notation}
                </NavLink>
            </div>
        </li>
    );
}

export default NavbarLi;