import React from 'react';
import s from './Avatar.module.css';
import ava_1 from '../../../../../image/yoda.jpg';

const Avatar = (props) => {
    return (
        <picture>
            <img src={ava_1} alt="avatar" className={s.img} />
        </picture>
    );
}

export default Avatar;