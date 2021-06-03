import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router';
import { createFormError } from '../../../utils/form-helper';
import { loginFormSchema } from '../../../utils/validators/validator';
import Button from '../../Common/Button/Button';
import Preloader from '../../Common/Preloader/Preloader';
import s from './LoginForm.module.css';

type Props = {
    login: (email: string, password: string, rememberMe: boolean,
        captcha: string) => void
    isAuth: boolean
    icon: string
    serverErrorMessage: string | null
    captcha: string | null
    loginInProgress: boolean
}

type FormData = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
const LoginForm: FC<Props> = ({login, isAuth, icon, serverErrorMessage, captcha,
    loginInProgress}) => {
    const {register, handleSubmit, formState: {errors, touchedFields}
    } = useForm<FormData>({
        resolver: yupResolver(loginFormSchema)
    });

    const onSubmit = (data: FormData) => {
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
            {serverErrorMessage === 'You are not authorized' &&
                <div className={s.employerDiv}>
                    <span className={s.employerSpan}>Данные тестового аккаунта:</span>
                    <span className={s.employerSpan}>Email: <b>free@samuraijs.com</b></span>
                    <span className={s.employerSpan}>Password: <b>free</b></span>
                </div>
            }
            {loginInProgress && <Preloader type='login' />}
        </form>
    )
}

export default LoginForm;