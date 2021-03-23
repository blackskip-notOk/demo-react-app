import Profile from './Profile';
import {addPost, updateNewPostText, getUserProfile} from '../../../redux/ProfilePageReducer';
import { connect } from "react-redux";
import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import { Redirect, withRouter } from 'react-router';

class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId;

        if (!userId) userId = 15899;

        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.profile) {
            return <Preloader />
        }

        if (!this.props.isAuth) return <Redirect to = {'/login'} />;
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
        icons: state.common.icons,
        isAuth: state.auth.isAuth
    };
}

let UrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    updateNewPostText, addPost, getUserProfile})(UrlDataProfileContainer);