import React from 'react';
import Navheader from './Navigation/Navheader';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <Navheader role="navigation"
                iconsHeader={props.iconsHeader}
                search={props.search}
                logo={props.logo} />
        </header>
    );
}

export default Header;