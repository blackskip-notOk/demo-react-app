import React, { FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/redux-store";
import { IPhotos } from "../../../TypeScript/Interfaces/profileInterface";
import Preloader from "../../Common/Preloader/Preloader";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type Props = {
    photos?: IPhotos | undefined
    updateUserStatus: (status: string) => void
    addPost: (post: string) => void
    savePhoto: (avatarSrc: File) => void
}

const Profile: FC<Props> = React.memo(({photos, updateUserStatus,
    addPost, savePhoto}) => {

    const profile = useSelector((state: AppState) => state.profile.profile);

    if (!profile) return <Preloader type='profile' />
    return (
        <div className={s.profileDiv}>
            <ProfileInfo {...profile}
                savePhoto={savePhoto}
                updateUserStatus={updateUserStatus}
            />
            <MyPosts addPost={addPost} photos={photos} />
        </div>
    );
});

export default Profile;