import React, { Component, useEffect } from 'react';
import { connect } from "react-redux";
import { useHistory, withRouter } from 'react-router';
import { compose } from 'redux';
import { getAuthUserId, getIsAuth } from '../../../redux/Auth/AuthSelectors';
import { getErrorIcon, getJobIcons } from '../../../redux/Common/CommonSelectors';
import { addPost, getUserProfile, getUserStatus, updateUserStatus,
    savePhoto } from '../../../redux/Profile/ProfileReducer';
import { getPosts, getProfile, getStatus } from '../../../redux/Profile/ProfileSelectors';
import Profile from './Profile';

// const ProfileContainer = ({match, authUserId, ...props}) => {
//     const history = useHistory();
//     useEffect(() => {
//         function refreshProfile() {
//             let userId = match.params.userId;
//             if (!userId) {
//                 userId = authUserId;
//                 if (!userId) {
//                     history.push('/login');
//                 }
//             }
//         getUserProfile(userId);
//         getUserStatus(userId);
//     }

//     refreshProfile();
//     }, [history, match, authUserId, props.profile]);

//     function refreshProfile() {
//                 let userId = match.params.userId;
//                 if (!userId) {
//                     userId = authUserId;
//                     if (!userId) {
//                         history.push('/login');
//                     }
//                 }
//             getUserProfile(userId);
//             getUserStatus(userId);
//         }

//         refreshProfile();
class ProfileContainer extends Component {
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate() {
        this.refreshProfile()
    }

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
                if (!userId) {
                    this.props.history.push('/login');
                }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    render() {
        return(
            <Profile {...this.props.profile} {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
        profile: getProfile(state),
        errorIcon: getErrorIcon(state),
        jobIcons: getJobIcons(state),
        status: getStatus(state),
        authUserId: getAuthUserId(state),
        isAuth: getIsAuth(state)
    };
}

export default compose(connect(mapStateToProps, {addPost,
    getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
    withRouter)(ProfileContainer);