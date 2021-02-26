import React from 'react';
import s from './Ul.module.css';
import Logo from './Logo';
import Search from './Search';
import Li from './Li';
import pathways from "../../Pathways/Pathways";
import icons from "../../Icons/Icons";

const Ul = () => {
    return (
        <ul className={s.ul}>
            <Logo />
            <Search icon={icons.search} />
            <Li pathway={pathways.home} icon={icons.home} notation="Home"  />
            <Li pathway={pathways.groups} icon={icons.groups} notation="Groups"  />
            <Li pathway={pathways.video} icon={icons.video} notation="Video"  />
            <Li pathway={pathways.notifications} icon={icons.notifications} notation="Notifications"  />
        </ul>
    );
}

export default Ul;