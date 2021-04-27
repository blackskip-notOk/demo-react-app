import React from 'react';
import { createListFromArray } from '../../../utils/object-helpers';
import NavbarLi from './NavbarLi/NavbarLi';
import s from './NavbarUl.module.css';

const NavbarUl = ({links, authUserId, getProfileData, ...props}) => {
    let link = createListFromArray(links, NavbarLi, null, authUserId,
        getProfileData, {...props});
    return (
        <ul className={s.ul}>
            {link}
        </ul>
    );
}

export default NavbarUl;
