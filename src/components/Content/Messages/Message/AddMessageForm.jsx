import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { createFormError, createTextarea } from '../../../../utils/form-helper';
import Button from '../../../Common/Button/Button';
import s from "./AddMessageForm.module.css";

const schema = yup.object().shape({
    message: yup.string()
        .required()
        .max(100),
});

const AddMessageForm = ({addMessage, icon}) => {
    const {register, handleSubmit, errors, formState: {touched}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => addMessage(data.message);

    const hasErrorMessage = touched?.message && errors?.message && s.error ;
    const messageError = errors?.message?.message;
    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className={s.form}>
            {createTextarea('message', register,
                'Write a message...', hasErrorMessage,
                s.textarea, 1)}
            {errors?.message && createFormError(s.divError,
                icon, messageError, s.figure)}
            <Button span="New Message" />
        </form>
    )
}

export default AddMessageForm;