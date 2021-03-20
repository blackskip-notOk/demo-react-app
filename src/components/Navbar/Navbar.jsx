import React from "react";
import s from './Navbar.module.css';
import NavbarUl from "./NavbarUl/NavbarUl";
import Friend from './Friends/Friends';

const Navbar = (props) => {
    let friend = props.friends.map(f => <Friend
        name={f.name} id={f.id} key={f.id} avatar={f.avatar} />);

    return (
        <nav className={s.nav} role="menu">
            <div className={s.innerNav}>
                <NavbarUl links={props.links} />
                <div className={s.div}>
                {friend}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;