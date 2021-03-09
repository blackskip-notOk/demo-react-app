import React from "react";
import s from './Navbar.module.css';
import Ul from "./Ul";
import Friend from './Friends/Friends';

const Nav = (props) => {
    let friend = props.navbar.friends.map(f => <Friend
        name={f.name} id={f.id} key={f.id} avatar={f.avatar} />);

    return (
        <nav className={s.nav} role="menu">
            <Ul links={props.navbar.links} />
            <div className={s.div}>
            {friend}
            </div>
        </nav>
    );
}

export default Nav;