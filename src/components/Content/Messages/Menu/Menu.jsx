import React from 'react';
import Figure from '../../../Common/Figure/Figure';
import s from './Menu.module.css';
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