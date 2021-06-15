import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { logout } from '../../redux/Auth/AuthReducer';
import { getProfileData } from '../../redux/Profile/ProfileReducer';
import { toggleVisibility, getAuthUserAvatar } from '../../redux/Header/HeaderReducer';
import { switchIsSettingsMode } from '../../redux/Profile/ProfileReducer';
import Header from './Header';
import { FC } from 'react';

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

const HeaderContainer: FC<Props> = React.memo((props) => {
    return <Header {...props} />
});

const connector = connect(null, {
    logout, toggleVisibility, getAuthUserAvatar,
    getProfileData, switchIsSettingsMode})

export default (connector)(HeaderContainer);