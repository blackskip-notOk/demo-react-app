import React from "react";
import { useForm } from 'react-hook-form';
import Button from "../../../../Common/Button/Button";
import s from './NewPostForm.module.css';
import { FormError } from "../../../../Common/Forms/FormErrors";

const NewPostForm = (props) => {
    const { register, handleSubmit, errors, formState } = useForm();

    const onSubmit = data => props.addPost(data.newPostText);

    const hasError = formState.isDirty && errors?.newPostText;

    const max = 560;

    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className={s.form}>
            <textarea name='newPostText'
                ref={register({
                    required: 'this field is required',
                    maxLength: {value: max,
                        message: `maximum ${max} symbols`}})}
                className={`${s.textarea}
                    ${(hasError ? s.error : "")}`}
                placeholder="Typing here..."
                rows='8' cols='10' />
            {errors.newPostText && <FormError
                className={s.divError}
                icon={props.icon} figure={s.figure}
                message={errors?.newPostText?.message} />
            }
            <Button span="add a new post" />
        </form>
    )
}

export default NewPostForm;