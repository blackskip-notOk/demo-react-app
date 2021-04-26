import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../Common/Button/Button";
import s from './Login.module.css';

const Login = ({isAuth, login, logout, avatar, userLogin, ...props}) => {
    return (
        <>
            {isAuth
            ? <div className={s.div}>
                    {userLogin}
                    <Button
                        type='button'
                        onClick={logout}
                        className={s.button}
                        spanClass={s.span}
                        span='log out' />
                </div>
            : <div className={s.div}>
                <NavLink to={'/login'}>
                    <Button onClick = {login}
                        type='button'
                        className={s.button}
                        spanClass={s.span}
                        span='log in'
                        />
                </NavLink>
            </div>
            }
        </>
    );
}

export default Login;