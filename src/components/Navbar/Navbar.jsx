import React from "react";
import s from './Navbar.module.css';
import Ul from "./Ul";

const Nav = (props) => {
    return (
        <nav className={s.nav} role="menu">
            <Ul />
        </nav>
    );
}

export default Nav;