import React from "react";
import Ul from './Ul';
import s from './Navheader.module.css';
import Logo from "./Logo";
import Search from "./Search";
import icons from '../../Icons/Icons'

const Navheader = (props) => {
    return (
        <nav className={s.nav} role={props.role}>
            <Logo />
            <Search icon={icons.search} />
            <Ul />
        </nav>
    );
}

export default Navheader;