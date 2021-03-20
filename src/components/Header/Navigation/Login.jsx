import React from "react";
import s from './Login.module.css';
import { NavLink } from "react-router-dom";
import Avatar from "../../Common/Avatar/Avatar";
import userAvatar from '../../../image/bb-8.png';

const Login = (props) => {
    return (
        props.isAuth
        ? <div className={s.div}>
            <NavLink to={'/settings'}>
                <Avatar src={props.src ? props.src : userAvatar}
                alt='User Avatar' className={s.img} />
                {props.login}
            </NavLink>
        </div>
        : <div className={s.div}>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
    );
}

export default Login;