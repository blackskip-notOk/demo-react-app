import React from 'react';
import appLoader from '../../../image/preloader/common.gif';
import profileLoader from '../../../image/preloader/common.gif';
import loginLoader from '../../../image/preloader/common.gif';
import s from './Preloader.module.css';

const Preloader = React.memo((props) => {
    let path = null;
    switch (props.type) {
        case 'app':
            path = appLoader;
            break;
        case 'login':
            path = loginLoader;
            break;
        case 'profile':
            path = profileLoader;
            break;
        default:
            path = appLoader;
    }
    return (
        <div className={s.preloaderDiv}>
            <img src={path} alt='preloader' className={s.preloaderImg} />
        </div>
    )
});

export default Preloader;