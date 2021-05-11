import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../../Common/Button/Button';
import s from './Menu.module.css'

const Menu = ({logout}) => {
    return (
        <ul className={s.menuUl}>
            <li>
                <NavLink to='/settings' target='_self'>
                    <span>Settings</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/login'}>
                    <Button
                        type='button'
                        onClick={logout}
                        className={s.logoutButton}
                        spanClass={s.logoutSpan}
                        span='log out' />
                </NavLink>
            </li>
        </ul>
    );
}

export default Menu;