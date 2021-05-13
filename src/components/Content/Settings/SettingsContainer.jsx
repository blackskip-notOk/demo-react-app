import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuthUserId } from '../../../redux/Auth/AuthSelectors';
import { getIsFetching, getisProfileUpdate, getProfileInfo,
    getServerErrorMessage } from '../../../redux/Profile/ProfileSelectors';
import { updateProfileProperties, getUserProfile } from '../../../redux/Profile/ProfileReducer';
import Settings from './Settings';
import { getErrorIcon } from '../../../redux/Common/CommonSelectors';

const SettingsContainer = (props) => {
    useEffect(() => {
        getUserProfile(props.authUserId);
    }, [props.authUserId], getUserProfile);

    return (
        <Settings {...props} />
    );
}

const mapStateToProps = state => {
    return {
        authUserId: getAuthUserId(state),
        profileInfo: getProfileInfo(state),
        isFetching: getIsFetching(state),
        isProfileUpdate: getisProfileUpdate(state),
        serverErrorMessages: getServerErrorMessage(state),
        icon: getErrorIcon(state)
    }
}

export default connect(mapStateToProps, {updateProfileProperties, getUserProfile})(SettingsContainer);