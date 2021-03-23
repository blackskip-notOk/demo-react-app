import Header from './Header';
import { connect } from 'react-redux';
import React from 'react';
import { getAuthUserData } from '../../redux/AuthReducer.js';
import Preloader from '../Common/Preloader/Preloader';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
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

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);