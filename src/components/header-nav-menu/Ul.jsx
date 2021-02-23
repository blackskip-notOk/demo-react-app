import React from "react";
import s from "../../css/Ul.module.css"
import LiFriends from "./Li-friends";
import LiHome from "./Li-home";
import LiLessons from "./Li-lessons";
import LiLogo from "./Li-logo";
import LiSearch from "./Li-search";
import LiVideo from "./Li-video";


const Ul = () => {
    return (
        <ul className={s.ul}>
            <LiLogo />
            <LiSearch />
            <LiHome />
            <LiFriends />
            <LiVideo />
            <LiLessons />
        </ul>
    );
}

export default Ul;