import React from 'react';
import preloader from '../../../image/preloader/earth-gif-preloader.gif';
import appLoader from '../../../image/preloader/1476.gif';
import homeLoader from '../../../image/preloader/1476.gif';
import profileLoader from '../../../image/preloader/profilePreloader.gif';
import dialogsLoader from '../../../image/preloader/1476.gif';
import friendsLoader from '../../../image/preloader/1476.gif';
import usersLoader from '../../../image/preloader/1476.gif';
import loginLoader from '../../../image/preloader/loader2.gif';

const Preloader = (props) => {
    let path = profileLoader;
    if (props.type === 'login') {
        path = loginLoader;
    } else if (props.type === 'profile') {
        path = profileLoader;
    }

    return (
        <div className={props.className}>
            <img src={path} alt='preloader' className={props.imgClass} />
        </div>
    )
}

export default Preloader;