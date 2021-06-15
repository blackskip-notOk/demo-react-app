import React from "react";
import HeaderLogin from "./HeaderLogin/HeaderLogin";
import Logo from "../../Common/Logo/Logo";
import s from './Navheader.module.css';
import NavigationUl from "./NavigationUl/NavigationUl";
import { FC } from "react";
import { IToggleVisibility } from "../../../TypeScript/Interfaces/headerInterface";
import { ISwitchIsSettingsMode } from "../../../TypeScript/Interfaces/profileInterface";

interface Props {
    logout: () => Promise<void>
    toggleVisibility: (isVisible: boolean) => IToggleVisibility
    getAuthUserAvatar: (authUserId: number | null) => Promise<void>
    switchIsSettingsMode: (isSettingsMode: boolean) => ISwitchIsSettingsMode
    getProfileData: (userId: number | null, authUserId: number | null) => Promise<void>
}

const Navheader: FC<Props> = React.memo(({logout,toggleVisibility, getAuthUserAvatar,
    getProfileData, switchIsSettingsMode}) => {
    return (
        <nav className={s.nav} role='navigation'>
            <Logo />
            <NavigationUl getProfileData={getProfileData} />
            <HeaderLogin logout={logout}
                toggleVisibility={toggleVisibility}
                getAuthUserAvatar={getAuthUserAvatar}
                switchIsSettingsMode={switchIsSettingsMode} />
        </nav>
    );
});

export default Navheader;