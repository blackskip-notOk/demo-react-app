import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router';
import * as yup from 'yup';
import { createFormError } from '../../../utils/form-helper';
import Button from '../../Common/Button/Button';
import Preloader from '../../Common/Preloader/Preloader';
import s from './LoginForm.module.css';

const schema = yup.object().shape({
    email: yup.string()
        .trim()
        .required('email is required')
        .max(50, 'too long email')
        .email('enter correct email'),
    password: yup.string()
        .required('password is required')
        .min(4, 'too short password')
        .max(20, 'too long password')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            'password is incorrect: example NkC6i4wL'),
    captcha: yup.string()
});

const LoginForm = ({login, isAuth, icon, serverErrorMessage, captcha,
    loginInProgress}) => {
    const {register, handleSubmit, formState: {errors, touchedFields}
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        login(data.email, data.password, data.rememberMe, data.captcha);
    }

    const errorEmailClass = touchedFields?.email && errors?.email && s.error;
    const errorPasswordClass = touchedFields?.password && errors?.password && s.error;
    const errorCaptchaClass = touchedFields?.captcha && errors?.captcha && s.error;
    const emailError = errors?.email?.message;
    const passwordError = errors?.password?.message;
    if (isAuth) return <Redirect to={'/profile'} />;
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form} >
            {serverErrorMessage === 'You are not authorized' && createFormError(s.divNotAuth, icon,
                serverErrorMessage, s.figure)}
            <h1>You can login</h1>
            <div className={s.inputDiv}>
                <label htmlFor={'email'} className={s.label}>email:</label>
                <input {...register('email')}
                    type='text'
                    className={`${s.input} ${errorEmailClass}`}
                    placeholder='email@xmail.com' />
            </div>
            {errors?.email && createFormError(s.divError, icon,
                emailError, s.figure)}
            <div className={s.inputDiv}>
                <label htmlFor={'password'} className={s.label}>password:</label>
                <input {...register('password')}
                    type='password'
                    className={`${s.input} ${errorPasswordClass}`}
                    placeholder='minimum 4 symbols' />
            </div>
            {errors?.password && createFormError(s.divError, icon,
                passwordError, s.figure)}
            <div className={s.inputDiv}>
                <label htmlFor='rememberMe' className={s.label}>remember Me:</label>
                <input {...register('rememberMe')}
                    type='checkbox'
                    className={s.checkbox} />
            </div>
            {captcha && <div className={s.captchaDiv}>
                <img src={captcha} alt='captcha' className={s.captcha} />
                <input {...register('captcha')}
                    type='text'
                    className={`${s.input} ${errorCaptchaClass}`}
                    placeholder='enter symbols from image' />
            </div>}
            {serverErrorMessage !== 'You are not authorized' && createFormError(s.divError, icon,
                serverErrorMessage, s.figure)}
            <Button type='submit' span='Sing in' className={s.singinButton}
                spanClass={s.singinSpan} disabled={loginInProgress} />
            {loginInProgress && <Preloader type='login'
                className={s.preloaderDiv} imgClass={s.img} />}
        </form>
    )
}

export default LoginForm;