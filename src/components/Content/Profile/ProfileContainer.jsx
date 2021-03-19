import Profile from './Profile';
import {addPost, updateNewPostText,
    setUserProfile} from '../../../redux/ProfilePageReducer';
import { connect } from "react-redux";
import React from 'react';
import axios from 'axios';
import Preloader from '../../Common/Preloader/Preloader';

class Profiles extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
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
        background: state.profilePage.background,
        avatar: state.profilePage.avatar,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        icons: state.common.icons
    };
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewPostText: (text) => {
//             let action = updateNewPostTextActionCreator(text);
//             dispatch(action);
//         },
//         addPost: () => {
//             let action = addPostActionCreator();
//             dispatch(action);
//         }
//     }
// }

const ProfileContainer = connect(mapStateToProps, {
    updateNewPostText, addPost, setUserProfile
})(Profiles);

export default ProfileContainer;