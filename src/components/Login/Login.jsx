import React from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/AuthReducer.js';
import {
    getEmailErrorMessage,
    getErrorMessages, getIsAuth,
    getPasswordErrorMessage
} from '../../redux/AuthSelectors';
import { getIcons } from '../../redux/CommonSelectors';
import s from './Login.module.css';
import LoginForm from './LoginForm/LoginForm';

class Login extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className={s.div}>
                <LoginForm {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        icons: getIcons(state),
        emailErrorMessage: getEmailErrorMessage(state),
        passwordErrorMessage: getPasswordErrorMessage(state),
        errorMessages: getErrorMessages(state)
    };
}

export default connect(mapStateToProps,
    {login, logout})(Login);