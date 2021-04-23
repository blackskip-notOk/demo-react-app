import { yupResolver } from '@hookform/resolvers/yup';
import React from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { createFormError } from '../../../../../utils/form-helper';
import Button from "../../../../Common/Button/Button";
import s from './NewPostForm.module.css';

const schema = yup.object().shape({
    post: yup.string()
        .required('your message is empty')
        .max(200, 'maximum 200 symbols')
});

const NewPostForm = ({addPost, errorIcon}) => {
    const {register, handleSubmit, formState: {errors, touchedFields}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => addPost(data.post);

    const errorPostClass = touchedFields?.post && errors?.post && s.error;
    const postError = errors?.post?.message;
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <textarea {...register('post')}
                placeholder='Write a new Post...'
                className={`${s.textarea} ${errorPostClass}`}
                cols={10}
                rows={10} />
            {errors?.post && createFormError(s.divError, errorIcon,
                postError, s.figure)}
            <Button span="add a new post" />
        </form>
    )
}

export default NewPostForm;