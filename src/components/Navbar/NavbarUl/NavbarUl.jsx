import React from 'react';
import { createListFromArray } from '../../../utils/object-helpers';
import NavbarLi from './NavbarLi/NavbarLi';
import s from './NavbarUl.module.css';

const NavbarUl = ({links}) => {
    let link = createListFromArray(links, NavbarLi);

    return (
        <ul className={s.ul}>
            {link}
        </ul>
    );
}

export default NavbarUl;
