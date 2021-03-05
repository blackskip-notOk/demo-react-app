import React from "react";
import s from './NavIcon.module.css';
import { NavLink } from 'react-router-dom';
import Figure from '../../../../Common/Figure/Figure';
import UnderText from '../UnderText/UnderText';

const NavIcon = (props) => {
    return (
    <div className={s.div}>
        <NavLink className={s.a} to={props.pathway} target={props.tagret} activeClassName={s.active}>
            <Figure icon={props.icon} className={s.figure}/>
        </NavLink>
        <UnderText undertext={props.undertext} divText={s.divText}/>
    </div>
    );
}

export default NavIcon;