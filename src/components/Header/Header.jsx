import React from 'react';
import s from './Header.module.css';
import Navheader from './Navigation/Navheader';

const Header = (props) => {
    return (
        <header className={s.header}>
            <Navheader {...props} />
        </header>
    );
}

export default Header;