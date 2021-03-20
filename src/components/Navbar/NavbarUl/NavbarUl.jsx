import React from 'react';
import NavbarLi from './NavbarLi/NavbarLi';
import s from './NavbarUl.module.css';

const NavbarUl = (props) => {
    let link = props.links.map( l => <NavbarLi pathway={l.pathway}
        target={l.target} notation={l.notation} key={l.id} />
    );

    return (
        <ul className={s.ul}>
            {link}
        </ul>
    );
}

export default NavbarUl;
