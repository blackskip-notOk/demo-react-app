import React from 'react';
import s from './Menu.module.css';
import MenuIcon from './MenuIcon';
import icons from '../../Icons/Icons';
import Search from './Search';

const Menu = (props) => {
    return (
        <div className={s.menu}>
            <MenuIcon icon={icons.menu} />
            <Search icon={icons.search} />
        </div>
    );
}

export default Menu;