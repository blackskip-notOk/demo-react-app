import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router';
import * as yup from 'yup';
import Button from '../../Common/Button/Button';
import { FormError } from '../../Common/Forms/FormErrors';
import Input from '../../Common/Forms/Input';
import s from './LoginForm.module.css';

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
        formState} = useForm({
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
                type='text'
                placeholder='enter your email'
                divInputClass={s.divInput}
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
                type='password'
                placeholder='enter your password'
                divInputClass={s.divInput}
                inputClass={s.input}
                errorClass={hasErrorPassword && s.error}
            />
            {errors?.password && <FormError
                className={s.divError}
                icon={props.icons[2].icon}
                message={errors?.password?.message}
                figure={s.figure} />}
            <div className={s.divInput}>
                <label htmlFor='rememberMe'>Remember Me </label>
                <input name='rememberMe'
                    type='checkbox'
                    ref={register}
                    className={s.checkbox} />
            </div>
            <Button type='submit'
                span='Sing in' />
        </form>
    )
}

export default LoginForm;