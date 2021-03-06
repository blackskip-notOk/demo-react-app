import React, { ChangeEvent, FC } from "react";
import userAvatar from '../../../../images/avatars/noAvatar.png';
import Avatar from "../../../Common/Avatar/Avatar";
import Figure from "../../../Common/Figure/Figure";
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileInfoUl from "./ProfileInfoUl/ProfileInfoUl";
import { IContacts, IPhotos } from "../../../../TypeScript/Interfaces/profileInterface";
import { useSelector } from "react-redux";
import { AppState } from "../../../../redux/redux-store";
import { getJobIcons, getPhotoIcon } from "../../../../redux/Common/CommonSelectors";

type Props = {
    photos?: IPhotos | undefined
    fullName: string
    aboutMe: string
    contacts: IContacts
    lookingForAJob: boolean
    lookingForAJobDescription: string
    savePhoto: (avatarSrc: File) => void
    updateUserStatus: (status: string) => void
}

const ProfileInfo: FC<Props> = React.memo(({savePhoto, photos, fullName, aboutMe,
    updateUserStatus, contacts, lookingForAJob, lookingForAJobDescription}) => {

    const isOwner = useSelector((state: AppState) => state.profile.isOwner);
    const jobIcons = useSelector(getJobIcons);
    const photoIcon = useSelector(getPhotoIcon);

    const onUserAvatarChanged = (e: ChangeEvent<HTMLInputElement>) => {
        let avatarSrc = e.target.files;
        if (avatarSrc?.length) savePhoto(avatarSrc[0]);
    }
    const ProfileInfoProps = {
        contacts: contacts,
        className: s.contactsUl,
        figureClass: s.contactIcon
    }
    return (
        <div className={s.div} >
            <div className={s.avatarDiv}>
                <Avatar src={photos!.large || userAvatar} alt='User Avatar'
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
            <ProfileStatus updateUserStatus={updateUserStatus} />
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
                    <ProfileInfoUl {...ProfileInfoProps} />
                </div>
            </div>
        </div>
    );
});

export default ProfileInfo;