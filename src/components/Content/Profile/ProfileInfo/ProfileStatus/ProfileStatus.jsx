import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { createFormError, createInput } from '../../../../../utils/form-helper';
import s from './ProfileStatus.module.css';


const schema = yup.object().shape({
    status: yup.string().max(20)
});

const ProfileStatus = (props) => {
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
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    const {register, errors, formState: {touched}} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const hasErrorStatus = touched?.status && errors?.status?.type && s.error;
    const statusError = errors?.status?.message;
    return (
        <div className={props.className} key={props.userId}>
            <p className={s.spanAbout}>{props.aboutMe}</p>
            {!editMode &&
            <>
                <span onDoubleClick={activateEditMode}
                    className={s.span}>
                    {props.status || "No Status"}
                </span>
                {errors?.status && createFormError(s.divError,
                    props.icon, statusError, s.figure)}
            </>
            }
            {editMode && createInput('status', register,
                {type: 'text',
                    autoFocus: true,
                    placeholder: "What's new?",
                    onBlur: deactivateEditMode,
                    onChange: onStatusChange,
                    value: status,
                    errorClass: hasErrorStatus,
                    inputClass: s.input
                })}
            {errors?.status && createFormError(s.divError,
                props.icon, statusError, s.figure)}
        </div>
    );
}

export default ProfileStatus;