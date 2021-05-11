import React from "react";
import userAvatar from '../../../../image/avatars/noAvatar.png';
import Avatar from "../../../Common/Avatar/Avatar";
import Figure from "../../../Common/Figure/Figure";
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Ul from "./ProfileInfoUl/Ul";

const ProfileInfo = ({savePhoto, userId, photos, fullName, aboutMe, status,
    updateUserStatus, contacts, errorIcon, lookingForAJob, lookingForAJobDescription,
    jobIcons, isOwner, photoIcon, contactsIcons}) => {

        const onUserAvatarChanged = (e) => {
        let avatarSrc = e.target.files;
        if (avatarSrc.length) savePhoto(avatarSrc[0]);
    }
    return (
        <div className={s.div} key={userId}>
            <div className={s.avatarDiv}>
                <Avatar src={photos.large || userAvatar} alt='User Avatar'
                    className={s.avatar} />
                {isOwner &&
                    <div  className={s.photoDiv}>
                        <label htmlFor='photo'>
                            <Figure className={s.photo} icon={photoIcon} />
                        </label>
                        <input type='file' id='photo'
                            onChange={onUserAvatarChanged}/>
                    </div>
                }
            </div>
            <h1 className={s.nameH1}>{fullName}</h1>
            <ProfileStatus userId={userId}
                aboutMe={aboutMe} status={status}
                updateUserStatus={updateUserStatus}
                className={s.statusDiv} errorIcon={errorIcon}
                isOwner={isOwner} />
            <div className={s.aboutMeDiv}>About me: {aboutMe ?
                aboutMe : <span>no information</span>}</div>
            <div className={s.infoDiv}>
                {lookingForAJob ?
                    <div className={s.jobDiv}>
                        <span className={s.jobSpan}>i'm looking for a job!</span>
                        <span className={s.descSpan}>{lookingForAJobDescription}</span>
                        <Figure className={s.jobFigure} icon={jobIcons[0]} />
                    </div> :
                    <div className={s.jobDiv}>
                        <span className={s.jobSpan}>i'm not looking for a job!</span>
                        <span className={s.descSpan}>
                            {lookingForAJobDescription ?
                                lookingForAJobDescription :
                                <span>no information</span>
                            }
                        </span>
                        <Figure className={s.jobFigure} icon={jobIcons[1]} />
                    </div>
                }
                <div className={s.contactsDiv}>
                    <h2>My contacts:</h2>
                    <Ul contacts={contacts}
                    className={s.contactsUl}
                    contactsIcons={contactsIcons}
                    figureClass={s.contactIcon} />
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;