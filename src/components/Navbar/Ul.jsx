import React from 'react';
import Li from './Li';
import s from './Ul.module.css';
import hrefs from '../Hrefs/Hrefs';
import { BrowserRouter, Route } from 'react-router-dom';

const Ul = (props) => {
    return (
        <ul className={s.ul}>
            <Li href={hrefs.profile} target="_self" notation="Profile" />
            <Li href={hrefs.messages} target="_self" notation="Messages" />
            <Li href={hrefs.friends} target="_self" notation="Friends" />
            <Li href={hrefs.news} target="_self" notation="News" />
        </ul>
    );
}

export default Ul;
