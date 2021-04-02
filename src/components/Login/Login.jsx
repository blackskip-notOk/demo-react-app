import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import { login, logout } from '../../redux/AuthReducer.js';
import { connect } from 'react-redux';
import s from './Login.module.css';

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
        isAuth: state.auth.isAuth,
        icons: state.common.icons,
        emailErrorMessage: state.auth.emailErrorMessage,
        passwordErrorMessage: state.auth.passwordErrorMessage,
        errorMessages: state.auth.errorMessages
    };
}

export default connect(mapStateToProps,
    {login, logout})(Login);