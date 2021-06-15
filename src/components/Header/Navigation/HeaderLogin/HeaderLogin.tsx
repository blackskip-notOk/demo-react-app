import React, { useEffect } from "react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../../redux/redux-store";
import { IToggleVisibility } from "../../../../TypeScript/Interfaces/headerInterface";
import { ISwitchIsSettingsMode } from "../../../../TypeScript/Interfaces/profileInterface";
import Avatar from "../../../Common/Avatar/Avatar";
import s from './HeaderLogin.module.css';
import Menu from "./Menu/Menu";

interface Props {
    logout: () => Promise<void>
    toggleVisibility: (isVisible: boolean) => IToggleVisibility
    getAuthUserAvatar: (authUserId: number | null) => Promise<void>
    switchIsSettingsMode: (isSettingsMode: boolean) => ISwitchIsSettingsMode
}

const HeaderLogin: FC<Props> = React.memo(({logout, toggleVisibility, getAuthUserAvatar,
    switchIsSettingsMode}) => {

    const isVisible = useSelector((state: AppState) => state.header.isVisible);
    const authUserId = useSelector((state: AppState) => state.header.authUserId);
    const authUserAvatar = useSelector((state: AppState) => state.header.authUserAvatar);
    const userLogin = useSelector((state: AppState) => state.auth.login);

    useEffect(() => {
        getAuthUserAvatar(authUserId)}, [authUserId, getAuthUserAvatar]);

    const onVisibilityChange = () => toggleVisibility(!isVisible);
    return (
        <div className={s.div}>
            <div className={s.profileDiv} onClick={onVisibilityChange}>
                <span>{userLogin}</span>
                <Avatar src={authUserAvatar?.small} alt='avatar'
                    className={s.avatar} />
            </div>
        {isVisible && <Menu logout={logout}
            switchIsSettingsMode={switchIsSettingsMode}
            toggleVisibility={toggleVisibility}
            isVisible={isVisible} />}
        </div>
    );
});

export default HeaderLogin;