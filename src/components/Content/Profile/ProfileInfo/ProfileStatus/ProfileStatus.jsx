import React, { useEffect, useState } from "react";
import s from './ProfileStatus.module.css';

const ProfileStatus = ({updateUserStatus, userId, aboutMe,
    errorIcon, isOwner, ...props}) => {

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

    return (
        <div className={props.className}>
            {!editMode ?
                <span onDoubleClick={isOwner ? activateEditMode : null}
                        className={s.statusSpan}>
                        {props.status || "No Status"}
                    </span> :
                <input type='text'
                    className={s.input}
                    placeholder="What's up?"
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                    value={status} />
            }
        </div>
    );
}

export default ProfileStatus;