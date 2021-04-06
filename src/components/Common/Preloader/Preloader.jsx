import React from 'react';
import preloader from '../../../image/giphy (2).gif';
import s from './Preloader.module.css';

const Preloader = (props) => {
    return (
        <div className={s.div}>
            <img src={preloader} alt='preloader GIF' className={s.img} />
        </div>
    )
}

export default Preloader;