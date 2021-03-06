import React from "react";
import s from './Li.module.css';
import { NavLink } from 'react-router-dom';
import Figure from "../Common/Figure/Figure";

const Li = (props) => {
    return (
        <li className={s.li}>
            <div className={s.div}>
                <NavLink
                className={s.a}
                to={props.pathway}
                target={props.tagret}
                activeClassName={s.active}>
                    <Figure icon={props.icon} className={s.figure} />
                    {props.notation}
                </NavLink>
            </div>
        </li>
    );
}

export default Li;