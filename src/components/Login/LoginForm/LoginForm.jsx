import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router';
import * as yup from 'yup';
import { createFormError } from '../../../utils/form-helper';
import Button from '../../Common/Button/Button';
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
    captcha: yup.string('enter captcha symbols')
});

const LoginForm = ({login, isAuth, icon, captchaUrl, getCaptchUrl}) => {
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
    const captchaError = errors?.captcha?.message;

    if (isAuth) return <Redirect to={'/profile'} />;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form} >
            <h1>Login Form</h1>
            <label htmlFor={'email'} className={s.label}>email:
                <input {...register('email')}
                    type='text'
                    className={`${s.input} ${errorEmailClass}`}
                    placeholder='email@xmail.com' />
            </label>
            {errors?.email && createFormError(s.divError, icon,
                emailError, s.figure)}
            <label htmlFor={'password'} className={s.label}>password:
                <input {...register('password')}
                    type='password'
                    className={`${s.input} ${errorPasswordClass}`}
                    placeholder='minimum 4 symbols' />
            </label>
            {errors?.password && createFormError(s.divError, icon,
                passwordError, s.figure)}
            <label htmlFor='rememberMe' className={s.label}>remember Me:
                <input {...register('rememberMe')}
                    type='checkbox'
                    className={s.checkbox} />
            </label>
            {errors?.captcha?.ref && <img src={errors?.captcha} alt='captcha' />}
            {errors?.captcha?.ref && <input {...register('password')}
                type='password'
                className={`${s.input} ${errorCaptchaClass}`}
                    placeholder='enter symbols from image' />}
            {errors?.captcha?.ref && createFormError(s.divError,
                icon, captchaError, s.figure)}
            <Button type='submit' span='Sing in' />
        </form>
    )
}

export default LoginForm;