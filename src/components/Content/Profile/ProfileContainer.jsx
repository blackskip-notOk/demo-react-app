import Profile from './Profile';
import {addPost, updateNewPostText,
    setUserProfile} from '../../../redux/ProfilePageReducer';
import { connect } from "react-redux";
import React from 'react';
import axios from 'axios';
import Preloader from '../../Common/Preloader/Preloader';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) userId = 15899;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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
let UrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    updateNewPostText, addPost, setUserProfile
})(UrlDataProfileContainer);