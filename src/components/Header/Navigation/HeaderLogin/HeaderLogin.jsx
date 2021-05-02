import React, { useEffect } from "react";
import Avatar from "../../../Common/Avatar/Avatar";
import s from './HeaderLogin.module.css';
import Menu from "./Menu/Menu";

const HeaderLogin = ({logout, userLogin, isVisible, authUserId,
    toggleVisibility, authUserAvatar, getAuthUserAvatar}) => {

useEffect(() => {
    getAuthUserAvatar(authUserId)}, [authUserId, getAuthUserAvatar]);

const onVisibilityChange = () => toggleVisibility(!isVisible);

    return (
        <div className={s.div}>
            <div className={s.profileDiv} onClick={onVisibilityChange}>
                <span>{userLogin}</span>
                <Avatar src={authUserAvatar} alt='avatar'
                    className={s.avatar} />
            </div>
        {isVisible && <Menu logout={logout} />}
        </div>
    );
}

export default HeaderLogin;