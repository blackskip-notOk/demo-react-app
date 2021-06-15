import { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { login, logout, getCaptchaUrl } from '../../redux/Auth/AuthReducer';
import Button from '../Common/Button/Button';
import s from './Login.module.css';
import LoginForm from './LoginForm/LoginForm';

type Props = ConnectedProps<typeof connector>

const Login: FC<Props> = (props) => {
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

const connector = connect(null, {login, logout, getCaptchaUrl});

export default compose(connector, withRouter)(Login);