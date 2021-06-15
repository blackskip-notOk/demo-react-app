import { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppState } from '../../../../../redux/redux-store';
import { IToggleVisibility } from '../../../../../TypeScript/Interfaces/headerInterface';
import { ISwitchIsSettingsMode } from '../../../../../TypeScript/Interfaces/profileInterface';
import Button from '../../../../Common/Button/Button';
import s from './Menu.module.css'

interface Props {
    logout: () => Promise<void>
    switchIsSettingsMode: (isSettingsMode: boolean) => ISwitchIsSettingsMode
    toggleVisibility: (isVisible: boolean) => IToggleVisibility
    isVisible: boolean
}

const Menu: FC<Props> = ({logout, switchIsSettingsMode, toggleVisibility, isVisible}) => {

    const isSettingsMode = useSelector((state: AppState) => state.profile.isSettingsMode);

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