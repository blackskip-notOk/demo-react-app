import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { createFormError } from '../../../../../utils/form-helper';
import s from './ProfileStatus.module.css';


const schema = yup.object().shape({
    status: yup.string()
        .trim()
        .max(20, 'too long status')
});
const ProfileStatus = ({updateUserStatus, userId, aboutMe,
    errorIcon, ...props}) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status, setStatus]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    const {register, formState: {errors, touchedFields}} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const errorStatusClass = touchedFields?.status && errors?.status && s.error;
    const statusError = errors?.status?.message;
    return (
        <div className={props.className}>
            <p className={s.spanAbout}>{aboutMe}</p>
            {!editMode
            ? <> <span onDoubleClick={activateEditMode}
                    className={s.span}>
                    {props.status || "No Status"}
                </span>
            {errors?.status && createFormError(s.divError,
                errorIcon, statusError, s.figure)}
            </>
            : <> <input {...register('status')}
                    type='text'
                    className={`${s.input} ${errorStatusClass}`}
                    placeholder="What's up?"
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                    value={status} />
                {errors?.status && createFormError(s.divError,
                    errorIcon, statusError, s.figure)}
            </>
            }
        </div>
    );
}

export default ProfileStatus;