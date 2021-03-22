import Profile from './Profile';
import {addPost, updateNewPostText,
    setUserProfile} from '../../../redux/ProfilePageReducer';
import { connect } from "react-redux";
import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import { withRouter } from 'react-router';
import { profileAPI } from '../../../API/API';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) userId = 15899;

        profileAPI.getProfile(userId)
        .then(data => {
            this.props.setUserProfile(data);
        });
    }

    render() {
        if (!this.props.profile) {
            return <Preloader />
        }
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        icons: state.common.icons
    };
}

let UrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    updateNewPostText, addPost, setUserProfile
})(UrlDataProfileContainer);