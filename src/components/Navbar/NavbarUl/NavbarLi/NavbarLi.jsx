import React from "react";
import { NavLink } from 'react-router-dom';
import s from './NavbarLi.module.css';

const NavbarLi = ({pathway, tagret, notation}) => {
    return (
        <li className={s.li}>
            <div className={s.div}>
                <NavLink className={s.link}
                    to={pathway}
                    target={tagret}
                    activeClassName={s.active}>
                        {notation}
                </NavLink>
            </div>
        </li>
    );
}

export default NavbarLi;