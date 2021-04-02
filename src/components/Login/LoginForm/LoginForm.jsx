import React from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router';
import Button from '../../Common/Button/Button';
import { FormError } from '../../Common/Forms/FormErrors';
import s from './LoginForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../Common/Forms/Input';

const schema = yup.object().shape({
    email: yup.string()
        .required()
        .max(20)
        .email(),
    password: yup.string()
        .required()
        .max(20)
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
});

const LoginForm = (props) => {
    const {register, handleSubmit, errors,
        formState, trigger} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        props.login(data.email, data.password, data.rememberMe);
    }

    const hasErrorEmail = formState?.touched?.email && formState?.errors?.email?.type;
    const hasErrorPassword = formState?.touched?.password && formState?.errors?.password?.type;

    if (props.isAuth) return <Redirect to={'/profile'} />;

    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className={s.form} >
            <h1>Login Form</h1>
            <Input name='email'
                register={register}
                hookFormErrors={errors}
                type='text'
                placeholder='enter your email'
                serverErrors={props.errorMessages}
                serverErrorMessage={props.emailErrorMessage}
                icon={props.icons[2].icon}
                inputClass={s.input}
                errorClass={hasErrorEmail && s.error}
            />
            {errors?.email && <FormError
                className={s.divError}
                icon={props.icons[2].icon}
                message={errors?.email?.message}
                figure={s.figure} />}
            <Input name='password'
                register={register}
                hookFormErrors={errors}
                type='password'
                placeholder='enter your password'
                serverErrors={props.errorMessages}
                serverErrorMessage={props.passwordErrorMessage}
                icon={props.icons[2].icon}
                inputClass={s.input}
                errorClass={hasErrorPassword && s.error}
            />
            {errors?.password && <FormError
                className={s.divError}
                icon={props.icons[2].icon}
                message={errors?.password?.message}
                figure={s.figure} />}
            {/* {errors?.email?.type} */}
            {/* <div className={s.divInput}>
                <label htmlFor='email'>Email:</label>
                <input name='email'
                    type='text'
                    ref={register}
                    className={`${s.input} ${(hasError && s.error)}`}
                    placeholder='Enter your Login' />
                {props.errorMessages && <FormError
                    className={s.divError}
                    icon={props.icons[2].icon}
                    message={props.emailErrorMessage}
                    figure={s.figure} />}
            </div>
            <div className={s.divInput}>
                <label htmlFor='password'>Password:</label>
                <input name='password'
                    type='password'
                    ref={register}
                    className={`${s.input} ${(hasError && s.error)}`}
                    placeholder='Enter your Password' />
                {props.errorMessages && <FormError
                    className={s.divError}
                    icon={props.icons[2].icon}
                    figure={props.passwordErrorMessage && s.figure}
                    message={props.passwordErrorMessage} />}
            </div> */}
            <div className={s.divInput}>
                <label htmlFor='rememberMe'>Remember Me </label>
                <input name='rememberMe'
                    type='checkbox'
                    ref={register}
                    className={s.checkbox} />
            </div>
            <Button type='submit'
                // onClick={() => {trigger().then(onSubmit)}}
                span='Sing in' />
        </form>
    )
}

export default LoginForm;