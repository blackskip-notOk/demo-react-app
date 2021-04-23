import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { createFormError } from '../../../../utils/form-helper';
import Button from '../../../Common/Button/Button';
import s from "./AddMessageForm.module.css";

const schema = yup.object().shape({
    message: yup.string()
        .required('your message empty')
        .max(150, 'maximum 150 symbols'),
});

const AddMessageForm = ({addMessage, icon}) => {
    const {register, handleSubmit, formState: {touchedFields, errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => addMessage(data.message);

    const errorMessageClass = touchedFields?.message && errors?.message && s.error;
    const messageError = errors?.message?.message;
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <textarea {...register('message')}
                className={`${s.input} ${errorMessageClass}`}
                placeholder='Write new message...' />
            {errors?.message && createFormError(s.divError, icon,
                messageError, s.figure)}
            <Button span="New Message" />
        </form>
    )
}

export default AddMessageForm;