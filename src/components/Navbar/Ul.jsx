import React from 'react';
import Li from './Li';
import s from './Ul.module.css';
import pathways from '../Pathways/Pathways';

const Ul = (props) => {
    return (
        <ul className={s.ul}>
            <Li pathway={pathways.profile} target="_self" notation="Profile" />
            <Li pathway={pathways.messages} target="_self" notation="Messages" />
            <Li pathway={pathways.friends} target="_self" notation="Friends" />
            <Li pathway={pathways.news} target="_self" notation="News" />
        </ul>
    );
}

export default Ul;
