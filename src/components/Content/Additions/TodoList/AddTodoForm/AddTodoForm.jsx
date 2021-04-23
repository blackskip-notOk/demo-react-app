import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { createFormError, createInput } from '../../../../../utils/form-helper';
import s from './AddTodoForm.module.css';

const schema = yup.object().shape({
    message: yup.string()
        .required()
        .max(100),
});

const AddTodoForm = ({addTodo, icon}) => {
    const [todo, setTodo] = useState();

    const onTodoChange = (e) => {
        setTodo(e.currentTarget.value);
    }

    const {register, handleSubmit, errors, formState: {touched}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => addTodo(data.todo);
    const hasErrorTodo = touched?.todo && errors?.todo && s.error;
    const todoError = errors?.todo?.message;
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}
                className={s.form}>
                <input name='todo'
                    type='text'
                    ref={register({...register})}
                    value={todo}
                    onChange={onTodoChange} />
                {errors?.todo && createFormError(s.divError,
                    icon, todoError, s.figure)}
            </form>
        </>
    );
}

export default AddTodoForm;