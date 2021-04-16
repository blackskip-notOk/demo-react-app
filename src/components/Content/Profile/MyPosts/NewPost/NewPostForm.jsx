import { yupResolver } from '@hookform/resolvers/yup';
import React from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { createFormError, createTextarea } from '../../../../../utils/form-helper';
import Button from "../../../../Common/Button/Button";
import s from './NewPostForm.module.css';

const schema = yup.object().shape({
    post: yup.string()
        .required()
        .max(200)
});

const NewPostForm = ({addPost, icon}) => {
    const {register, handleSubmit, errors, formState: {touched}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => addPost(data.post);

    const hasErrorPost = touched?.post && errors?.post?.type && s.error;
    const postError = errors?.post?.message;
    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className={s.form}>
            {createTextarea('post', register, 'Write a new Post...',
                hasErrorPost, s.textarea, 10)}
            {errors?.post && createFormError(s.divError, icon, postError,
                s.figure)}
            <Button span="add a new post" />
        </form>
    )
}

export default NewPostForm;