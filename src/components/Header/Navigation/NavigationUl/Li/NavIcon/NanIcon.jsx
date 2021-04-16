import React from "react";
import { NavLink } from 'react-router-dom';
import Figure from "../../../../../Common/Figure/Figure";
import Undertext from '../UnderText/UnderText';
import s from './NavIcon.module.css';

const NavIcon = ({pathway, icon, undertext}) => {
    return (
    <div className={s.div}>
        <NavLink className={s.a} to={pathway} activeClassName={s.active}>
            <Figure icon={icon} className={s.figure}/>
        </NavLink>
        <Undertext undertext={undertext} className={s.divText}/>
    </div>
    );
}

export default NavIcon;