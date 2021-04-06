import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '../../../Common/Button/Button';
import { FormError } from '../../../Common/Forms/FormErrors';
import Textarea from '../../../Common/Forms/Textarea';
import s from "./AddMessageForm.module.css";

const schema = yup.object().shape({
    message: yup.string()
        .required()
        .max(100),
});

const AddMessageForm = (props) => {
    const {register, handleSubmit, errors, formState} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => props.addMessage(data.message);

    const hasError = formState?.touched?.message && formState?.errors?.message?.type;

    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className={s.form}>

        <Textarea name='message'
            register={register}
            placeholder='Write a message...'
            errorClass={hasError && s.error}
            textareaClass={s.textarea} />
        {errors?.message && <FormError
            className={s.divError}
            icon={props.icon}
            message={errors?.message?.message}
            figure={s.figure} />}
            <Button span="New Message" />
        </form>
    )
}

export default AddMessageForm;