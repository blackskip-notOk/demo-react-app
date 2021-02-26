import React from "react";
import s from './Li.module.css';
import { NavLink } from 'react-router-dom';

const Li = (props) => {
    return (
        <li className={s.li}>
            <div className={s.div}>
                <NavLink className={s.a} to={props.pathway}>
                    <figure className={props.icon} />
                </NavLink>
                <div className={s.divText}>
                    {props.notation}
                </div>
            </div>
        </li>
    );
}

export default Li;