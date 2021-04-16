import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router';
import * as yup from 'yup';
import { createFormError, createInput } from '../../../utils/form-helper';
import Button from '../../Common/Button/Button';
import s from './LoginForm.module.css';

const schema = yup.object().shape({
    email: yup.string()
        .required()
        .max(20)
        .email(),
    password: yup.string()
        .required()
        .max(20)
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
    captcha: yup.string()
        .required()
});

const LoginForm = ({login, isAuth, icons, captchaUrl, getCaptchUrl}) => {
    const {register, handleSubmit, errors: {email, password, captcha},
        formState: {touched}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        login(data.email, data.password, data.rememberMe, data.captcha);
    }

    const hasErrorEmailClass = touched?.email && email && s.error;
    const hasErrorPasswordClass = touched?.password && password && s.error;
    const hasErrorCaptchaClass = touched?.captcha && captcha && s.error;
    const emailError = email?.message;
    const passwordError = password?.message;
    const captchaError = captcha?.message;

    if (isAuth) return <Redirect to={'/profile'} />;

    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className={s.form} >
            <h1>Login Form</h1>
            {createInput('email', register, 'text',
                'enter your email', s.divInput, s.input,
                hasErrorEmailClass)}
            {email && createFormError(s.divError,
                icons[2].icon, emailError, s.figure)
            }
            {createInput('password', register, 'password',
                'enter your password', s.divInput, s.input,
                hasErrorPasswordClass)}
            {password && createFormError(s.divError,
                icons[2].icon, passwordError, s.figure)
            }
            <div className={s.divInput}>
                <label htmlFor='rememberMe'>Remember Me </label>
                <input name='rememberMe'
                    type='checkbox'
                    ref={register}
                    className={s.checkbox} />
            </div>
            {captcha && <img src={captcha} alt='captcha' />}
            {captcha && createInput('captcha', register, 'text',
                'enter image symbols', s.divInput, s.input,
                hasErrorCaptchaClass)}
            {captcha && createFormError(s.divError,
                icons[2].icon, captchaError, s.figure)
            }
            <Button type='submit'
                span='Sing in' />
        </form>
    )
}

export default LoginForm;