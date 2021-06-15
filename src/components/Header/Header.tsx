import React, { FC } from 'react';
import { IToggleVisibility } from '../../TypeScript/Interfaces/headerInterface';
import { ISwitchIsSettingsMode } from '../../TypeScript/Interfaces/profileInterface';
import s from './Header.module.css';
import Navheader from './Navigation/Navheader';

interface Props {
    logout: () => Promise<void>
    toggleVisibility: (isVisible: boolean) => IToggleVisibility
    getAuthUserAvatar: (authUserId: number | null) => Promise<void>
    switchIsSettingsMode: (isSettingsMode: boolean) => ISwitchIsSettingsMode
    getProfileData: (userId: number | null, authUserId: number | null) => Promise<void>
}

const Header: FC<Props> = React.memo((props) => {
    return (
        <header className={s.header}>
            <Navheader {...props} />
        </header>
    );
});

export default Header;