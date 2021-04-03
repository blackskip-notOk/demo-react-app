import Header from './Header';
import { connect } from 'react-redux';
import React from 'react';
import { login, logout } from '../../redux/AuthReducer.js';
import { Redirect } from 'react-router';
import { getIconsHeader, getLogo, getSearch } from '../../redux/CommonSelectors';
import { getIsAuth, getUserLogin } from '../../redux/AuthSelectors';
import { getProfile } from '../../redux/ProfilePageSelectors';

class HeaderContainer extends React.Component {
    render() {
        // if (!this.props.profile) {
        //     return (
        //         <div>
        //             <Redirect to='/login' />
        //         </div>
        //     );
        // }
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        iconsHeader: getIconsHeader(state),
        search: getSearch(state),
        logo: getLogo(state),
        isAuth: getIsAuth(state),
        profile: getProfile(state),
        userLogin: getUserLogin(state)
    };
}

export default connect(mapStateToProps, {login, logout})(HeaderContainer);