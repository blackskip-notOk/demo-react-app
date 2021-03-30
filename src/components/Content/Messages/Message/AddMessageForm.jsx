import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../Common/Button/Button';
import { FormError } from '../../../Common/Forms/FormErrors';
import s from "./AddMessageForm.module.css";

const AddMessageForm = (props) => {
    const {register, handleSubmit, errors, formState} = useForm();

    const onSubmit = data => props.addMessage(data.newMessageText);

    const hasError = formState.isDirty && errors.newMessageText;

    const max = 5;

    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className={s.form}>
            <textarea name='newMessageText'
                ref={register({
                    required: 'this field is required',
                    maxLength: {value: max,
                        message: `maximum ${max} symbols`}})}
                className={`${s.textarea}
                    ${(hasError ? s.error : "")}`}
                placeholder="Write a message..."
                cols='10' rows='2' />
            {errors.newMessageText && <FormError
                className={s.divError}
                icon={props.icon} figure={s.figure}
                message={errors.newMessageText.message} />
            }
            <Button span="New Message" />
        </form>
    )
}

export default AddMessageForm;