import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getAuthUserId, getIsAuth } from '../../../redux/AuthSelectors';
import { getIcons } from '../../../redux/CommonSelectors';
import { addPost, getUserProfile, getUserStatus,
    updateUserStatus, savePhoto } from '../../../redux/Profile/ProfileReducer';
import { getPosts, getProfile, getStatus } from '../../../redux/ProfileSelectors';
import Preloader from '../../Common/Preloader/Preloader';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error: null};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        try {
            getUserStatus()
        } catch (error) {
            this.setState({error});
        }
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

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        // if (this.state.error) {
        //     return <h1>Отловил ошибку.</h1>
        //   }
        //   return (
        //     <button onClick={this.handleClick}>Нажми на меня</button>

        if (!this.props.profile) {
            return <Preloader />
        }

        return (
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                isOwner={!this.props.match.params.userId} />
        );
    }
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

export default compose(connect(mapStateToProps,
    {addPost, getUserProfile, getUserStatus,
        updateUserStatus, savePhoto}),
    withRouter)(ProfileContainer);