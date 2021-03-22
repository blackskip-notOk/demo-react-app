import Header from './Header';
import { connect } from 'react-redux';
import React from 'react';
import { setUserData } from '../../redux/AuthReducer.js';
import { setUserProfile } from '../../redux/ProfilePageReducer.js';
import Preloader from '../Common/Preloader/Preloader';
import { authAPI, profileAPI } from '../../API/API';

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.getAuth()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                this.props.setUserData(id, email, login);
                profileAPI.getProfile(data.data.id)
                .then(data => {
                    this.props.setUserProfile(data);
                });
            }
        })
    }

    render() {
        if (!this.props.profile) {
            return <Preloader />
        }
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        iconsHeader: state.common.iconsHeader,
        search: state.common.search,
        logo: state.common.logo,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.profilePage.profile
    };
}

export default connect(mapStateToProps, {setUserData, setUserProfile})(HeaderContainer);