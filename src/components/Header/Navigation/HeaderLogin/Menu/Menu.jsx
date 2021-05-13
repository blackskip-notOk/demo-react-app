import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../../Common/Button/Button';
import s from './Menu.module.css'

const Menu = ({logout, isSettingsMode, switchIsSettingsMode,
    toggleVisibility, isVisible}) => {
    const onChangesettingsMode = () => {
        switchIsSettingsMode(!isSettingsMode);
        toggleVisibility(!isVisible);
    }

    return (
        <ul className={s.menuUl}>
            <li>
                {/* <NavLink to='/settings' target='_self'> */}
                    <span onClick={onChangesettingsMode}>Settings</span>
                {/* </NavLink> */}
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