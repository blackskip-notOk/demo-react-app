import React from 'react';
import s from './Ul.module.css';
import Logo from './Logo';
import Search from './Search';
import Li from './Li';
import hrefs from "../../Hrefs/Hrefs";
import icons from "../../Icons/Icons";

const Ul = () => {
    return (
        <ul className={s.ul}>
            <Logo />
            <Search icon={icons.search} />
            <Li href={hrefs.home} icon={icons.home} notation="Home"  />
            <Li href={hrefs.groups} icon={icons.groups} notation="Groups"  />
            <Li href={hrefs.video} icon={icons.video} notation="Video"  />
            <Li href={hrefs.notifications} icon={icons.notifications} notation="Notifications"  />
        </ul>
    );
}

export default Ul;