import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Li.module.css';

const Li = (props) => {
    return (
        <li className={s.li}>
            <NavLink
                to={props.pathway}
                target={props.target}
                activeClassName={s.active}
            >
                {props.notation}
            </NavLink>
        </li>
    );
}

export default Li;