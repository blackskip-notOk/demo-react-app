import React from 'react';
import Navheader from './Navigation/Navheader';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <Navheader role="navigation"/>
        </header>
    );
}

export default Header;