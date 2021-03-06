import React from 'react';
import s from './Ul.module.css';
import Li from './Li/Li';
import pathways from '../../Pathways/Pathways';
import icons from "../../Icons/Icons";

const Ul = (props) => {
    return (
        <ul className={s.ul}>
            <Li pathway={pathways.home} icon={icons.home}
                undertext="Home" />
            <Li pathway={pathways.groups} icon={icons.groups}
                undertext="Groups" />
            <Li pathway={pathways.video} icon={icons.video}
                undertext="Video" />
            <Li pathway={pathways.notifications} icon={icons.notifications}
                undertext="Notifications" />
        </ul>
    );
}

export default Ul;