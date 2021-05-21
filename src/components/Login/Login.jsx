import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { login, logout, getCaptchaUrl } from '../../redux/Auth/AuthReducer';
import { getCaptcha, getServerErrorMessage, getIsAuth,
    getLoginInProgress } from '../../redux/Auth/AuthSelectors';
import { getErrorIcon } from '../../redux/Common/CommonSelectors';
import Button from '../Common/Button/Button';
import s from './Login.module.css';
import LoginForm from './LoginForm/LoginForm';

const Login = (props) => {
    return (
        <div className={s.loginDiv}>
            <h1>demo react app</h1>
            <p>
                This is my <span>demo app</span>. Here I study how create,
                develop and support app used on <span>React - Redux</span> technologies.
            </p>
            <LoginForm {...props} />
            <div className={s.createDiv}>
                <h2>Or you can create account:</h2>
                <a href={'https://social-network.samuraijs.com/signUp'}
                    target='_blanc'>
                    <Button type='button'
                        className={s.createButton}
                        spanClass={s.createSpan}
                        span='create account' />
                </a>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        icon: getErrorIcon(state),
        captcha: getCaptcha(state),
        serverErrorMessage: getServerErrorMessage(state),
        loginInProgress: getLoginInProgress(state)
    };
}

export default compose(connect(mapStateToProps,
    {login, logout, getCaptchaUrl}), withRouter)(Login);