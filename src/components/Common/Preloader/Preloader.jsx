import React from 'react';
import preloader from '../../../image/preloader/earth-gif-preloader.gif';
import appLoader from '../../../image/preloader/appLoader.gif';
import profileLoader from '../../../image/preloader/profileLoader.gif';
import loginLoader from '../../../image/preloader/loginLoader.gif';

const Preloader = (props) => {
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
    // if (props.type === 'login') {
        // path = loginLoader;
    // } else if (props.type === 'profile') {
        // path = profileLoader;
    }

    return (
        <div className={props.className}>
            <img src={path} alt='preloader' className={props.imgClass} />
        </div>
    )
}

export default Preloader;