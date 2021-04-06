import React from "react";
import Login from "./Login";
import Logo from "./Logo";
import s from './Navheader.module.css';
import Search from "./Search";
import Ul from './Ul';

const Navheader = (props) => {
    return (
        <nav className={s.nav} role={props.role}>
            <Logo src={props.logo.src} alt={props.logo.alt} key={props.id} />
            <Search search={props.search} />
            <Ul iconsHeader={props.iconsHeader} />
            <Login isAuth={props.isAuth} login={props.login}
                logout={props.logout} src={props?.avatar?.small}
                userLogin={props.userLogin} />
        </nav>
    );
}

export default Navheader;