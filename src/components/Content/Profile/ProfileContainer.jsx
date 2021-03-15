import Profile from './Profile';
import {addPostActionCreator,
    updateNewPostTextActionCreator} from '../../../redux/ProfilePageReducer';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        background: state.profilePage.background,
        avatar: state.profilePage.avatar,
        name: state.profilePage.name,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;