import { yupResolver } from '@hookform/resolvers/yup';
import React from "react";
import { useForm } from 'react-hook-form';
import { createFormError } from '../../../../../utils/form-helper';
import { newPostSchema } from '../../../../../utils/validators/validator';
import Button from "../../../../Common/Button/Button";
import s from './NewPostForm.module.css';

const NewPostForm = React.memo(({addPost, errorIcon}) => {
    const {register, handleSubmit, formState: {errors, touchedFields}} = useForm({
        resolver: yupResolver(newPostSchema)
    });

    const onSubmit = data => addPost(data.post);

    const errorPostClass = touchedFields?.post && errors?.post && s.error;
    const postError = errors?.post?.message;
    return (
        <form id='post' onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <textarea {...register('post')}
                placeholder='Write a new Post...'
                className={`${s.textarea} ${errorPostClass}`} />
            {errors?.post && createFormError(s.divError, errorIcon,
                postError, s.figure)}
            <Button form='post'
                className={s.addPostButton}
                spanClass={s.addPostSpan}
                span="add a new post" />
        </form>
    )
});

export default NewPostForm;