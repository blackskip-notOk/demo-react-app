import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "../../../Common/Avatar/Avatar";
import Button from "../../../Common/Button/Button";
import s from './Login.module.css';
import Menu from "./Menu/Menu";

const Login = ({isAuth, login, logout, avatar, userLogin,
    isVisible, toggleVisibility}) => {
    const onVisibilityChange = () => toggleVisibility(!isVisible);
    return (
        <>
            {isAuth ?
                <div className={s.div}>
                    <div className={s.profileDiv} onClick={onVisibilityChange}>
                        <span>{userLogin}</span>
                        <Avatar src={avatar?.small} alt='avatar'
                            className={s.avatar} />
                    </div>
                    {isVisible && <Menu logout={logout} />}
                </div> :
                <div className={s.div}>
                <NavLink to={'/login'}>
                    <Button onClick = {login}
                        type='button'
                        className={s.loginButton}
                        spanClass={s.loginSpan}
                        span='log in'
                        />
                </NavLink>
            </div>
            }
        </>
    );
}

export default Login;