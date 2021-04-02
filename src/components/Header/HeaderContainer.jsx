import Header from './Header';
import { connect } from 'react-redux';
import React from 'react';
import { login, logout } from '../../redux/AuthReducer.js';
import { Redirect } from 'react-router';

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
        iconsHeader: state.common.iconsHeader,
        search: state.common.search,
        logo: state.common.logo,
        isAuth: state.auth.isAuth,
        profile: state.profilePage.profile,
        userLogin: state.auth.login
    };
}

export default connect(mapStateToProps, {login, logout})(HeaderContainer);