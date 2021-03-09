import React from "react";
import Ul from './Ul';
import s from './Navheader.module.css';
import Logo from "./Logo";
import Search from "./Search";

const Navheader = (props) => {
    let logo = props.logo.map( l => <Logo src={l.src} alt={l.alt} key={l.id} /> );
    return (
        <nav className={s.nav} role={props.role}>
            {logo}
            <Search search={props.search} />
            <Ul state={props.state} />
        </nav>
    );
}

export default Navheader;