import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import { setUserLogin, deleteUserLogin} from '../../redux/AuthReducer.js';
import { connect } from 'react-redux';
import s from './Login.module.css';

class Login extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className={s.div}>
                <h1>Login Form</h1>
                <LoginForm {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        password: state.auth.password,
        rememberMe: state.auth.rememberMe,
        captcha: state.auth.captcha,
        isAuth: state.auth.isAuth,
        icons: state.common.icons
    };
}

export default connect(mapStateToProps,
    {setUserLogin, deleteUserLogin})(Login);