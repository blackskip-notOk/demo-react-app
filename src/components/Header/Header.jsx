import React from 'react';
import Navheader from './Navigation/Navheader';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <Navheader role="navigation"
                state={props.common.iconsHeader}
                search={props.common.search}
                logo={props.common.logo} />
        </header>
    );
}

export default Header;