import React from 'react';
import Navheader from './Navigation/Navheader';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <Navheader role="navigation" state={props.state.iconsHeader}
                search={props.state.search}
                logo={props.state.logo} />
        </header>
    );
}

export default Header;