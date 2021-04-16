import React from "react";
import Login from "./Login/Login";
import Logo from "../../Common/Logo/Logo";
import s from './Navheader.module.css';
import NavigationUl from "./NavigationUl/NavigationUl";

const Navheader = ({iconsHeader, isAuth, login, logout,
    profile, userLogin}) => {
    return (
        <nav className={s.nav} role='navigation'>
            <Logo />
            <NavigationUl iconsHeader={iconsHeader} />
            <Login isAuth={isAuth} login={login}
                logout={logout} avatar={profile?.photos}
                userLogin={userLogin} />
        </nav>
    );
}

export default Navheader;