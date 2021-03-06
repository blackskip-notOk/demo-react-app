import React, { FC } from 'react';
import appLoader from '../../../images/preloader/common.gif';
import profileLoader from '../../../images/preloader/common.gif';
import loginLoader from '../../../images/preloader/common.gif';
import s from './Preloader.module.css';

type Props = {
    type: string
}
const Preloader: FC<Props> = React.memo((props) => {
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