import React from 'react';
import { NavLink } from 'react-router-dom';
import { createListFromArray } from '../../../utils/object-helpers';
import NavbarLi from './NavbarLi/NavbarLi';
import s from './NavbarUl.module.css';

const NavbarUl = ({links, authUserId, getProfileData, ...props}) => {
    // let link = createListFromArray(links, NavbarLi, null, authUserId,
        // getProfileData, {...props});
    return (
        <ul className={s.ul}>
            <li className={s.li}>
                {/* <div className={s.div}> */}
                    <NavLink className={s.link}
                        // onClick={refreshProfile}
                        to='/dialogs'
                        // target={target}
                        activeClassName={s.active}>
                        'Messages'
                </NavLink>
            {/* </div> */}
            </li>
            <li className={s.li}>
                <NavLink className={s.link}
                    to='/friends'
                    activeClassName={s.active}>
                    'Friends'
                </NavLink>
            </li>
            <li className={s.li}>
                <NavLink className={s.link}
                    to='/users/page=1'
                    activeClassName={s.active}>
                    'Users'
                </NavLink>
            </li>
            {/* {link} */}
        </ul>
    );
}

export default NavbarUl;