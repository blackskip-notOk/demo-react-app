import React from "react";
import { NavLink } from 'react-router-dom';
import s from './NavbarLi.module.css';

const NavbarLi = ({pathway, target, notation, authUserId, getProfileData,
    ...props}) => {
    const refreshProfile = () => {
        let userId = authUserId;
        if (notation === 'Profile') {
            if (!userId) {
                props.history.push('/login');
            }
        }
        getProfileData(userId, userId);
    }

    return (
        <li className={s.li}>
            <div className={s.div}>
                <NavLink className={s.link}
                    to={pathway}
                    target={target}
                    activeClassName={s.active}
                    onClick={refreshProfile}>
                        {notation}
                </NavLink>
            </div>
        </li>
    );
}

export default NavbarLi;