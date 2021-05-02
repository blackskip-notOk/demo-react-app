import React from "react";
import HeaderLogin from "./HeaderLogin/HeaderLogin";
import Logo from "../../Common/Logo/Logo";
import s from './Navheader.module.css';
import NavigationUl from "./NavigationUl/NavigationUl";

const Navheader = ({iconsHeader, avatar, logout, userLogin,
    isVisible, toggleVisibility, authUserAvatar, authUserId,
    getAuthUserAvatar}) => {
    return (
        <nav className={s.nav} role='navigation'>
            <Logo />
            <NavigationUl iconsHeader={iconsHeader}
                authUserId={authUserId} />
            <HeaderLogin logout={logout}
                avatar={avatar}
                userLogin={userLogin}
                isVisible={isVisible}
                toggleVisibility={toggleVisibility}
                authUserAvatar={authUserAvatar}
                authUserId={authUserId}
                getAuthUserAvatar={getAuthUserAvatar} />
        </nav>
    );
}

export default Navheader;