import React from "react";
import s from "../css/Navbar.module.css";

const Nav = () => {
    return (
        <nav className={s.nav} role="menu">
            <ul className={s.ul}>
                <li><a href="https://github.com" target="_blanc">Profile</a></li>
                <li><a href="https://github.com" target="_blanc">Messages</a></li>
                <li><a href="https://github.com" target="_blanc">Memories</a></li>
                <li><a href="https://github.com" target="_blanc">Games</a></li>
            </ul>
        </nav>
    );
}

export default Nav;