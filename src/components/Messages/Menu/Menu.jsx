import React from 'react';
import s from './Menu.module.css';
import Figure from '../../Common/Figure/Figure';
import Search from './Search';

const Menu = (props) => {
    return (
        <div className={s.menu}>
            <Figure icon={props.icons[9].icon} className={s.figure} />
            <Search icon={props.search.icon} figure={s.figure_search} />
        </div>
    );
}

export default Menu;