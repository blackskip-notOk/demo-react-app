import React from "react";
import Ul from "./Ul";
import s from "../../css/Navheader.module.css";

const Navheader = () => {
    return (
        <nav className={s.nav} role="navigation">
            <Ul />
        </nav>
    );
}

export default Navheader;