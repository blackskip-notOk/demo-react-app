import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { createFormError } from '../../../../utils/form-helper';
import { addMessageSchema } from '../../../../utils/validators/validator';
import Button from '../../../Common/Button/Button';
import s from "./AddMessageForm.module.css";

const AddMessageForm = ({addMessage, icon}) => {
    const {register, handleSubmit, formState: {touchedFields, errors}} = useForm({
        resolver: yupResolver(addMessageSchema)
    });

    const onSubmit = data => addMessage(data.message);

    const errorMessageClass = touchedFields?.message && errors?.message && s.error;
    const messageError = errors?.message?.message;
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            {errors?.message && createFormError(s.divError, icon,
                messageError, s.figure)}
            <textarea {...register('message')}
                className={`${s.textarea} ${errorMessageClass}`}
                placeholder='Write new message...' />
            <Button span="New Message"
                className={s.addMessageButton}
                spanClass={s.addMessageSpan} />
        </form>
    )
}

export default AddMessageForm;