import { yupResolver } from '@hookform/resolvers/yup';
import React from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from "../../../../Common/Button/Button";
import { FormError } from "../../../../Common/Forms/FormErrors";
import Textarea from "../../../../Common/Forms/Textarea";
import s from './NewPostForm.module.css';

const schema = yup.object().shape({
    post: yup.string()
        .required()
        .max(200)
});

const NewPostForm = (props) => {
    const {register, handleSubmit, errors, formState} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => props.addPost(data.post);

    const hasError = formState?.touched?.post && formState?.errors?.post?.type;

    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className={s.form}>
            <Textarea name='post'
                register={register}
                placeholder="Write a new Post..."
                errorClass={hasError && s.error}
                textareaClass={s.textarea}
                rows='10' />
            {errors?.post && <FormError
                className={s.divError}
                icon={props.icon}
                message={errors?.post?.message}
                figure={s.figure} />}
            <Button span="add a new post" />
        </form>
    )
}

export default NewPostForm;