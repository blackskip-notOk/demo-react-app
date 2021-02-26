import React from "react";
import Ul from './Ul';
import s from './Navheader.module.css';

const Navheader = (props) => {
    return (
        <nav className={s.nav} role={props.role}>
            <Ul />
        </nav>
    );
}

export default Navheader;