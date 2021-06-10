import { FC } from "react";
import { FriendType, LinkType } from "../../TypeScript/Types";
import { createListFromArray } from "../../utils/object-helpers";
import Friend from './Friends/Friends';
import s from './Navbar.module.css';
import NavbarUl from "./NavbarUl/NavbarUl";

type Props = {
    friends: Array<FriendType>
    links: Array<LinkType>
}
const Navbar: FC<Props> = ({friends, links}) => {
    let friend = createListFromArray(friends, Friend);
    return (
        <nav className={s.nav} role="menu">
            <div className={s.innerNav}>
                <NavbarUl links={links} />
                <div className={s.friendsDiv}>
                    {friend}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;