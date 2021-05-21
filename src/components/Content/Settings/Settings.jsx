import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createFormError } from '../../../utils/form-helper';
import Button from '../../Common/Button/Button';
import s from './Settings.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { settingsSchema } from '../../../utils/validators/validator';
import Figure from '../../Common/Figure/Figure';

const Settings = React.memo(({authUserId, isFetching, updateProfileProperties,
    serverErrorMessages, icon, profileInfo, isProfileUpdate,
    savePhoto, photoIcon, ...props}) => {
    const {register, handleSubmit, formState: {touchedFields, errors}} = useForm({
        resolver: yupResolver(settingsSchema)
    });

    // let initGithub = profileInfo.github ? profileInfo.github : '';
    const [fullName, setFullName] = useState(profileInfo.fullName);
    const [aboutMe, setAboutMe] = useState(profileInfo.aboutMe);
    const [jobDescription, setJobDescription] = useState(profileInfo.jobDescription);
    const [github, setGithub] = useState(profileInfo.github);

    useEffect(() => {
        setGithub(profileInfo.github)
    }, [profileInfo.github, setGithub]);
    // const [vk, setVk] = useState(profileInfo.vk);
    // const [facebook, setFacebook] = useState(profileInfo.facebook);
    // const [instagram, setInstagram] = useState(profileInfo.instagram);
    // const [twitter, setTwitter] = useState(profileInfo.twitter);
    // const [website, setWebsite] = useState(profileInfo.website);
    // const [youtube, setYoutube] = useState(profileInfo.youtube);
    // const [mainLink, setMainLink] = useState(profileInfo.mainLink);

    const onFullNameChange = (e) => {
        setFullName(e.currentTarget.value);
    };

    const onAvatarChanged = (e) => {
        let avatarSrc = e.target.files;
        if (avatarSrc.length) savePhoto(avatarSrc[0]);
    }

    const onAboutMeChange = (e) => {
        setAboutMe(e.currentTarget.value);
    };

    const onJobDescriptionChange = (e) => {
        setJobDescription(e.currentTarget.value);
    };

    const onGithubChange = (e) => {
        setGithub(e.currentTarget.value);
    };

    // const onVkChange = (e) => {
    //     setVk(e.currentTarget.value);
    // };

    // const onFacebookChange = (e) => {
    //     setFacebook(e.currentTarget.value);
    // };

    // const onInstagramChange = (e) => {
    //     setInstagram(e.currentTarget.value);
    // };

    // const onTwitterChange = (e) => {
    //     setTwitter(e.currentTarget.value);
    // };

    // const onWebsiteChange = (e) => {
    //     setWebsite(e.currentTarget.value);
    // };

    // const onYoutubeChange = (e) => {
    //     setYoutube(e.currentTarget.value);
    // };

    // const onMainlinkChange = (e) => {
    //     setMainLink(e.currentTarget.value);
    // };

    const onSubmit = data => {
        let aboutMe = data.aboutMe ? data.aboutMe : null;
        let jobDescription = data.jobDescription ? data.jobDescription : null;
        let fullName = data.fullName ? data.fullName : null;
        let github = data.github ? data.github : null;
        let vk = data.vk ? data.vk : null;
        let facebook = data.facebook ? data.facebook : null;
        let instagram = data.instagram ? data.instagram : null;
        let twitter = data.twitter ? data.twitter : null;
        let website = data.website ? data.website : null;
        let youtube = data.youtube ? data.youtube : null;
        let mainLink = data.mainLink ? data.mainLink : null;

        const contacts = {github, vk, facebook, instagram, twitter,
            website, youtube, mainLink};

        updateProfileProperties(authUserId, aboutMe, data.lookingForAJob,
            jobDescription, fullName, contacts);
    };

    const errorAboutMeClass = touchedFields?.aboutMe && errors?.aboutMe && s.error;
    const errorJobDescriptionClass = touchedFields?.jobDescription && errors?.jobDescription && s.error;
    const errorFullNameClass = touchedFields?.fullName && errors?.fullName && s.error;
    const errorAvatarClass = touchedFields?.avatar && errors?.avatar && s.error;
    const errorGithubClass = touchedFields?.github && errors?.github && s.error;
    const errorVkClass = touchedFields?.vk && errors?.vk && s.error;
    const errorFacebookClass = touchedFields?.facebook && errors?.facebook && s.error;
    const errorInstagramClass = touchedFields?.instagram && errors?.instagram && s.error;
    const errorTwitterClass = touchedFields?.twitter && errors?.twitter && s.error;
    const errorWebsiteClass = touchedFields?.website && errors?.website && s.error;
    const errorYoutubeClass = touchedFields?.youtube && errors?.youtube && s.error;
    const errorMainLinkClass = touchedFields?.mainLink && errors?.mainLink && s.error;

    const aboutMeError = errors?.aboutMe?.message;
    const jobDescriptionError = errors?.jobDescription?.message;
    const fullNameError = errors?.fullName?.message;
    const githubError = errors?.github?.message;
    const vkError = errors?.vk?.message;
    const facebookError = errors?.facebook?.message;
    const instagramError = errors?.instagram?.message;
    const twitterError = errors?.twitter?.message;
    const websiteError = errors?.website?.message;
    const youtubeError = errors?.youtube?.message;
    const mainLinkError = errors?.mainLink?.message;

    const serverErrorMessage = serverErrorMessages?.map((error, index) => createFormError(s.divServerError, icon,
        error, s.figure, index));
    return (
        <div className={s.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <h1 className={s.idSpan}>Your ID: {authUserId}</h1>
            <div className={s.aboutMeDiv}>
                <div className={s.nicknameDiv}>
                    <label htmlFor='fullName' className={s.label}>nickname:</label>
                    <input {...register('fullName')}
                        type='text'
                        className={`${s.input} ${errorFullNameClass}`}
                        placeholder='your nickname...'
                        value={fullName}
                        onChange={onFullNameChange} />
                </div>
                {errors?.fullName && createFormError(s.divError, icon, fullNameError, s.figure)}
                <div className={s.avatarDiv}>
                    <label htmlFor='avatar' className={s.label}>avatar:
                        <Figure className={s.photo} icon={photoIcon} /></label>
                        <input {...register('avatar')}
                            type='file'
                            id='photo'
                            className={`${s.avatarInput} ${errorAvatarClass}`}
                            onChange={onAvatarChanged}/>
                </div>
                <label htmlFor='aboutMe' className={s.textareaLabel}>Write something about yourself:</label>
                <textarea {...register('aboutMe')}
                    className={`${s.textarea} ${errorAboutMeClass}`}
                    placeholder='describe yourself...'
                    value={aboutMe}
                    onChange={onAboutMeChange} />
                {errors?.aboutMe && createFormError(s.divError, icon, aboutMeError, s.figure)}
                </div>
                <div className={s.jobInfoDiv}>
                <div className={s.radio}>
                    <div className={s.jobDiv}>
                        <label htmlFor='lookingForAJob' className={s.labelRadio}>I am looking for a job</label>
                        <input {...register('lookingForAJob')}
                            id='lookingForAJob'
                            type='radio'
                            name='lookingForAJob'
                            checked
                            className={s.radioButton}
                            value={true} />
                    </div>
                <div className={s.jobDiv}>
                    <label htmlFor='notLookingForAJob' className={s.labelRadio}>I don't need a job</label>
                    <input {...register('lookingForAJob')}
                        id='notLookingForAJob'
                        type='radio'
                        name='lookingForAJob'
                        className={s.radioButton}
                        value={false} />
                </div>
            </div>
            <label htmlFor='jobDescription' className={s.textareaLabel}>What kind of job are you looking for?</label>
            <textarea {...register('jobDescription')}
                className={`${s.textarea} ${errorJobDescriptionClass}`}
                placeholder='write your future job description'
                value={jobDescription}
                onChange={onJobDescriptionChange} />
            {errors?.jobDescription && createFormError(s.divError, icon, jobDescriptionError, s.figure)}
            </div>
            <div className={s.contactsDiv}>
                <h2 className={s.contactsSpan}>your contacts:</h2>
                <div className={s.inputDiv}>
                    <label htmlFor='github' className={s.label}>GitHub:</label>
                    <input {...register('github')}
                        type='text'
                        className={`${s.input} ${errorGithubClass}`}
                        placeholder='github'
                        value={github}
                        onChange={onGithubChange}
                         />
                </div>
                {errors?.github && createFormError(s.divError, icon, githubError, s.figure)}
                <div className={s.inputDiv}>
                    <label htmlFor={'vk'} className={s.label}>vk:</label>
                    <input {...register('vk')}
                        type='text'
                        className={`${s.input} ${errorVkClass}`}
                        placeholder='vk'
                        // value={vk}
                        // onChange={onVkChange}
                         />
                </div>
                {errors?.vk && createFormError(s.divError, icon, vkError, s.figure)}
                <div className={s.inputDiv}>
                    <label htmlFor={'facebook'} className={s.label}>facebook:</label>
                    <input {...register('facebook')}
                        type='text'
                        className={`${s.input} ${errorFacebookClass}`}
                        placeholder='facebook'
                        // value={facebook}
                        // onChange={onFacebookChange}
                         />
                </div>
                {errors?.facebook && createFormError(s.divError, icon, facebookError, s.figure)}
                <div className={s.inputDiv}>
                    <label htmlFor={'instagram'} className={s.label}>instagram:</label>
                    <input {...register('instagram')}
                        type='text'
                        className={`${s.input} ${errorInstagramClass}`}
                        placeholder='instagram'
                        // value={instagram}
                        // onChange={onInstagramChange}
                         />
                </div>
                {errors?.instagram && createFormError(s.divError, icon, instagramError, s.figure)}
                <div className={s.inputDiv}>
                    <label htmlFor={'twitter'} className={s.label}>twitter:</label>
                    <input {...register('twitter')}
                        type='text'
                        className={`${s.input} ${errorTwitterClass}`}
                        placeholder='twitter'
                        // value={twitter}
                        // onChange={onTwitterChange}
                         />
                </div>
                {errors?.twitter && createFormError(s.divError, icon, twitterError, s.figure)}
                <div className={s.inputDiv}>
                    <label htmlFor={'website'} className={s.label}>website:</label>
                    <input {...register('website')}
                        type='text'
                        className={`${s.input} ${errorWebsiteClass}`}
                        placeholder='website'
                        // value={website}
                        // onChange={onWebsiteChange}
                         />
                </div>
                {errors?.website && createFormError(s.divError, icon, websiteError, s.figure)}
                <div className={s.inputDiv}>
                    <label htmlFor={'yuotube'} className={s.label}>youtube:</label>
                    <input {...register('youtube')}
                        type='text'
                        className={`${s.input} ${errorYoutubeClass}`}
                        placeholder='youtube'
                        // value={youtube}
                        // onChange={onYoutubeChange}
                         />
                </div>
                {errors?.youtube && createFormError(s.divError, icon, youtubeError, s.figure)}
                <div className={s.inputDiv}>
                    <label htmlFor={'mainLink'} className={s.label}>mainLink:</label>
                    <input {...register('mainLink')}
                        type='text'
                        className={`${s.input} ${errorMainLinkClass}`}
                        placeholder='mainLink'
                        // value={mainLink}
                        // onChange={onMainlinkChange}
                         />
                </div>
                {errors?.mainLink && createFormError(s.divError, icon, mainLinkError, s.figure)}
            </div>
            {serverErrorMessage}
            <Button type='submit' span='update profile' className={s.sendButton}
                spanClass={s.sendSpan} />
                {/* disabled={isFetching} /> */}
            {isProfileUpdate && <div>Profile update</div>}
            </form>
            </div>
    );
});

export default Settings;