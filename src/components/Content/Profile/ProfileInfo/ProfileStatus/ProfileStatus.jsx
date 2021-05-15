import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createFormError } from "../../../../../utils/form-helper";
import { statusSchema } from "../../../../../utils/validators/validator";
import Button from "../../../../Common/Button/Button";
import s from './ProfileStatus.module.css';

const ProfileStatus = ({updateUserStatus, userId, aboutMe,
    errorIcon, isOwner, ...props}) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const {register, handleSubmit, formState: {errors, touchedFields}} = useForm({
        resolver: yupResolver(statusSchema)
    });

    useEffect(() => {
        setStatus(props.status);
    }, [props.status, setStatus]);

    const switchEditMode = () => {
        setEditMode(!editMode);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    const onSubmit = data => {
            updateUserStatus(data.status);
            switchEditMode();
    };

    const handleKeyDown = e => {
        if (e.keyCode === 13) e.preventDefault();
        if (e.keyCode === 27) switchEditMode()
        console.log(e);
    }

    const errorStatusClass = touchedFields?.status && errors?.status && s.error;
    const statusError = errors?.status?.message;

    return (
        <form id='status'
            autoComplete='false'
            onKeyDown={handleKeyDown}
            onSubmit={handleSubmit(onSubmit)}
            className={s.statusDiv}>
            {!editMode ?
                <span onDoubleClick={isOwner ? switchEditMode : undefined}
                        className={s.statusSpan}>
                        {props.status || "No Status"}
                    </span> :
                <>
                    <input {...register('status')}
                        type='text'
                        className={`${s.input} ${errorStatusClass}`}
                        placeholder="What's up?"
                        autoFocus={true}
                        onChange={onStatusChange}
                        value={status}
                        autoComplete='off' />
                    {errors?.status &&
                        createFormError(s.divError, errorIcon,
                        statusError, s.figure)}
                    <Button form='status'
                        className={s.updateStatusButton}
                        spanClass={s.updateStatusSpan}
                        span="update status" />
                </>
            }
        </form>
    );
}

export default ProfileStatus;