import React from 'react';
import Navheader from './Navigation/Navheader';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <Navheader role="navigation"
                iconsHeader={props.iconsHeader}
                search={props.search}
                logo={props.logo}
                isAuth={props.isAuth}
                login={props.login}
                avatar={props?.profile?.photos}
                logout={props.logout}
                userLogin={props.userLogin} />
        </header>
    );
}

export default Header;