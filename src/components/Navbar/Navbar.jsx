import React from "react";
import s from './Navbar.module.css';

const Nav = (props) => {
    return (
        <nav className={s.nav} role="menu">
            <ul className={s.ul}>
                <li><a href="https://github.com" target="_blanc">{props.profile}</a></li>
                <li><a href="https://github.com" target="_blanc">{props.messages}</a></li>
                <li><a href="https://github.com" target="_blanc">{props.memories}</a></li>
                <li><a href="https://github.com" target="_blanc">{props.games}</a></li>
            </ul>
        </nav>
    );
}

export default Nav;