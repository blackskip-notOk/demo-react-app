import React, { FC } from 'react';
import { LinkType } from '../../../Types/Types';
import { createListFromArray } from '../../../utils/object-helpers';
import NavbarLi from './NavbarLi/NavbarLi';
import s from './NavbarUl.module.css';

type Props = {
    links: Array<LinkType>
}
const NavbarUl: FC<Props> = ({links}) => {
    let link = createListFromArray(links, NavbarLi);
    return (
        <ul className={s.ul}>
            {link}
        </ul>
    );
}

export default NavbarUl;