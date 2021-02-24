import React from 'react';
import Navheader from '../header-nav-menu/Navheader';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <Navheader />
        </header>
    );
}

export default Header;