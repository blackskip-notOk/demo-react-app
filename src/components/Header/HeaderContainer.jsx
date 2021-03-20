import Header from './Header';
import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';
import { setUserData } from '../../redux/AuthReducer.js';
import { setUserProfile } from '../../redux/ProfilePageReducer.js';
import Preloader from '../Common/Preloader/Preloader';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setUserData(id, email, login);
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + response.data.data.id)
                    .then(response => {
                    this.props.setUserProfile(response.data);
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