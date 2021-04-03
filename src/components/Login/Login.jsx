import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import { login, logout } from '../../redux/AuthReducer.js';
import { connect } from 'react-redux';
import s from './Login.module.css';
import { getIsAuth, getEmailErrorMessage,
    getPasswordErrorMessage, getErrorMessages } from '../../redux/AuthSelectors';
import { getIcons } from '../../redux/CommonSelectors';

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