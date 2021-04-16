import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Redirect, withRouter } from 'react-router';
import { compose } from 'redux';
import { getAuthUserId, getIsAuth } from '../../../redux/Auth/AuthSelectors';
import { getIcons } from '../../../redux/Common/CommonSelectors';
import { addPost, getUserProfile, getUserStatus,
    updateUserStatus } from '../../../redux/Profile/ProfileReducer';
import { getPosts, getProfile, getStatus } from '../../../redux/Profile/ProfileSelectors';
import Preloader from '../../Common/Preloader/Preloader';
import Profile from './Profile';

const ProfileContainer = ({match, authUserId, history,
    getUserProfile, getUserStatus, profile,
    status, ...props}) => {
    // const [error, handleClick] = useState(null);

    useEffect(() => {
        function refreshProfile() {
            let userId = match.params.userId;
            if (!userId) {
                userId = authUserId;
                if (!userId) {
                    // <Redirect to='/login' />
                    history.push('/login');
                }
            }
        getUserProfile(userId);
        getUserStatus(userId);
    }

    refreshProfile();
    }, [match, authUserId, history, getUserProfile, getUserStatus]);

    // useEffect(() => {
    //     getUserProfile(match.params.userId);
    // }, [match.params.userId, getUserProfile]);

    // useEffect(() => {
    //     getUserStatus(match.params.userId);
    // }, [match.params.userId, getUserStatus]);

    return(
        <>
            {!profile ? <Preloader />
            : <Profile {...props} />}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
        profile: getProfile(state),
        icons: getIcons(state),
        status: getStatus(state),
        authUserId: getAuthUserId(state),
        isAuth: getIsAuth(state)
    };
}

export default compose(connect(mapStateToProps, {addPost,
    getUserProfile, getUserStatus, updateUserStatus}),
    withRouter)(ProfileContainer);