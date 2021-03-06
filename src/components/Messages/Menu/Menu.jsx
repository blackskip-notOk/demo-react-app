import React from 'react';
import s from './Menu.module.css';
import Figure from '../../Common/Figure/Figure';
import icons from '../../Icons/Icons';
import Search from './Search';

const Menu = (props) => {
    return (
        <div className={s.menu}>
            <Figure icon={icons.menu} className={s.figure} />
            <Search icon={icons.search} figure={s.figure_search} />
        </div>
    );
}

export default Menu;