import React from "react";
import { createListFromArray } from "../../utils/object-helpers";
import Friend from './Friends/Friends';
import s from './Navbar.module.css';
import NavbarUl from "./NavbarUl/NavbarUl";

const Navbar = ({friends, links, authUserId, getProfileData, ...props}) => {
    let friend = createListFromArray(friends, Friend);
    return (
        <nav className={s.nav} role="menu">
            <div className={s.innerNav}>
                <NavbarUl links={links}
                    authUserId={authUserId}
                    getProfileData={getProfileData}
                    props={props} />
                <div className={s.div}>
                    {friend}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;