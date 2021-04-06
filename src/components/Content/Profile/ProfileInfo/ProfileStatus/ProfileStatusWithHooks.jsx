import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { FormError } from "../../../../Common/Forms/FormErrors";
import Input from "../../../../Common/Forms/Input";
import s from './ProfileStatus.module.css';


const schema = yup.object().shape({
    status: yup.string().max(20)
});

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    const {register, errors, formState} = useForm({
            mode: 'onBlur',
            resolver: yupResolver(schema),
    });

    const hasError = formState?.touched?.status && formState?.errors?.status?.type;

    return (
        <div className={props.className} key={props.userId}>
            <span className={s.spanAbout}>{props.aboutMe}</span>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}
                    className={s.span}>
                    {props.status || "No Status"}
                </span>
                {errors?.status && <FormError
                    className={s.divError}
                    icon={props.icon}
                    message={errors?.status?.message}
                    figure={s.figure} />}
            </div>
            }
            {editMode && <><Input name='status'
                    register={register}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                    value={status}
                    autoFocus={true}
                    type='text'
                    placeholder="what's new?"
                    divInputClass={s.divInput}
                    inputClass={s.input}
                    errorClass={hasError && s.error}
                    rows='8'
                    cols='10' />
                {errors?.status && <FormError
                    className={s.divError}
                    icon={props.icon}
                    message={errors?.status?.message}
                    figure={s.figure} />}
            </>}
        </div>
    );
}

export default ProfileStatusWithHooks;