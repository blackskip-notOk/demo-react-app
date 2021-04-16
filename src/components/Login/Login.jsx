import React from 'react';
import { connect } from 'react-redux';
import { login, logout, getCaptchaUrl } from '../../redux/Auth/AuthReducer';
import { getCaptcha, getEmailErrorMessage, getErrorMessages, getIsAuth,
    getPasswordErrorMessage } from '../../redux/Auth/AuthSelectors';
import { getIcons } from '../../redux/Common/CommonSelectors';
import s from './Login.module.css';
import LoginForm from './LoginForm/LoginForm';

const Login = (props) => {
    return (
        <div className={s.div}>
            <LoginForm {...props} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        icons: getIcons(state),
        captcha: getCaptcha(state),
        emailErrorMessage: getEmailErrorMessage(state),
        passwordErrorMessage: getPasswordErrorMessage(state),
        errorMessages: getErrorMessages(state)
    };
}

export default connect(mapStateToProps, {login, logout, getCaptchaUrl})(Login);