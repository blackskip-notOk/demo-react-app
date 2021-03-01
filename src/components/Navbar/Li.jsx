import React from "react";
import s from './Li.module.css';
import { NavLink } from 'react-router-dom';

const Li = (props) => {
    return (
        <li className={s.li}>
            <div className={s.div}>
                <NavLink
                    className={s.a}
                    to={props.pathway}
                    target={props.tagret}
                    activeClassName={s.active}
                >
                    <figure className={`${props.icon} ${s.icon}`} />
                    {props.notation}
                </NavLink>
                <div className={s.divText}>
                    {props.undertext}
                </div>
            </div>
        </li>
    );
}

export default Li;