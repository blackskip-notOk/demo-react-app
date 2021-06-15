import { yupResolver } from "@hookform/resolvers/yup";
import React, { ChangeEvent, FC, KeyboardEventHandler, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getErrorIcon } from "../../../../../redux/Common/CommonSelectors";
import { AppState } from "../../../../../redux/redux-store";
import { createFormError } from "../../../../../utils/form-helper";
import { statusSchema } from "../../../../../utils/validators/validator";
import Button from "../../../../Common/Button/Button";
import s from './ProfileStatus.module.css';

interface Props {
    updateUserStatus: (status: string) => void
}

interface FormData {
    status: string
}

const ProfileStatus: FC<Props> = React.memo(({updateUserStatus, ...props}) => {

    const errorIcon = useSelector(getErrorIcon);
    const isOwner = useSelector((state: AppState) => state.profile.isOwner);
    const status = useSelector((state: AppState) => state.profile.status);

    const [editMode, setEditMode] = useState(false);
    const [newStatus, setNewStatus] = useState(status);

    const {register, handleSubmit, formState: {errors, touchedFields}} = useForm<FormData>({
        resolver: yupResolver(statusSchema)
    });

    useEffect(() => {
        setNewStatus(status);
    }, [status, setNewStatus]);

    const switchEditMode = () => {
        setEditMode(!editMode);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value);
    }

    const onSubmit = (data: FormData) => {
            updateUserStatus(data.status);
            switchEditMode();
    };

    const handleKeyDown: KeyboardEventHandler<HTMLFormElement> = (e) => {
        switch(e.key) {
            case 'Enter':
                e.preventDefault()
                break;
            case 'Escape':
                switchEditMode()
                break;
        }
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
                <span onDoubleClick={isOwner ? switchEditMode : undefined} className={s.statusSpan}>
                    {status || "No Status"}
                </span> :
                <>
                    <input {...register('status')}
                        type='text'
                        className={`${s.input} ${errorStatusClass}`}
                        placeholder="What's up?"
                        autoFocus={true}
                        onChange={onStatusChange}
                        value={newStatus}
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
});

export default ProfileStatus;