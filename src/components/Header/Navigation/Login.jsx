import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Common/Button/Button";
import s from './Login.module.css';

const Login = (props) => {
    return (
        <div>
            {props.isAuth
            ? <div className={s.div}>{props.userLogin}<Button
                onClick = {props.logout}
                type='button'
                span='log out' />
            </div>
            : <div className={s.div}>
                <NavLink to={'./login'}>
                    <Button onClick = {props.login}
                    type='button'
                    span='log in' />
                </NavLink>
            </div>
            }
        </div>
    );
}

export default Login;