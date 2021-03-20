import React from "react";
import s from './NavbarLi.module.css';
import { NavLink } from 'react-router-dom';

const NavbarLi = (props) => {
    return (
        <li className={s.menu__item}>
            <div className={s.item}>
                <NavLink className={s.item__link}
                to={props.pathway}
                target={props.tagret}
                activeClassName={s.active}>
                    {props.notation}
                </NavLink>
            </div>
        </li>
    );
}

export default NavbarLi;