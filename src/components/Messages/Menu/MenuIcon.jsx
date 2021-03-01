import React from "react";
import s from './MenuIcon.module.css';

const MenuIcon = (props) => {
    return (
        <figure className={`${props.icon} ${s.figure}`} />
    );
}

export default MenuIcon;