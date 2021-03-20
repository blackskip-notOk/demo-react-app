import React from "react";
import Ul from './Ul';
import s from './Navheader.module.css';
import Logo from "./Logo";
import Search from "./Search";
import Login from "./Login";

const Navheader = (props) => {
    return (
        <nav className={s.nav} role={props.role}>
            <Logo src={props.logo.src} alt={props.logo.alt} key={props.id} />
            <Search search={props.search} />
            <Ul iconsHeader={props.iconsHeader} />
            <Login isAuth={props.isAuth} login={props.login} src={props.avatar.small}/>
        </nav>
    );
}

export default Navheader;