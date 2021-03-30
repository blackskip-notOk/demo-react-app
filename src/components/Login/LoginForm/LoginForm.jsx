import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../Common/Button/Button';
import { FormError } from '../../Common/Forms/FormErrors';
import s from './LoginForm.module.css';

const LoginForm = (props) => {
    const { register, handleSubmit, errors, formState } = useForm();

    const onSubmit = data => {
        props.setUserLogin(data.email, data.password, data.rememberMe);
    }

    const hasError = formState.isDirty && errors;

    const max = 20;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <div className={s.divInput}>
                <label htmlFor='email'>Email:</label>
                <input name='email' placeholder='Enter your Login'
                    ref={register({required: 'this field is required',
                        maxLength: {value: max,
                            message: `maximum ${max} symbols`},
                        pattern: {value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: 'email is not valid'}})}
                    className={`${s.input} ${(hasError ? s.error : "")}`} />
                <ErrorMessage errors={errors} name='email'
                    render={({ message }) => <FormError
                        className={s.divError}
                        icon={props.icons[2].icon}
                        figure={s.figure} message={message} />} />
            </div>
            <div className={s.divInput}>
                <label htmlFor='password'>Password:</label>
                <input name='password' placeholder='Enter your Password'
                    ref={register({required: 'this field is required',
                        maxLength: {value: max,
                            message: `maximum ${max} symbols`},
                        pattern: {value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                            message: 'password is not valid'}})}
                    className={`${s.input} ${(hasError ? s.error : "")}`} />
               <ErrorMessage errors={errors} name='password'
                    render={({ message }) => <FormError
                        className={s.divError}
                        icon={props.icons[2].icon}
                        figure={s.figure} message={message} />} />
            </div>
            <div className={s.divInput}>
                <label htmlFor='rememberMe'>Remember Me </label>
                <input name='rememberMe' type='checkbox'
                    ref={register} className={s.checkbox} />
            </div>
                <Button type='submit' span='Sing Up' />
        </form>
    )
}

export default LoginForm;