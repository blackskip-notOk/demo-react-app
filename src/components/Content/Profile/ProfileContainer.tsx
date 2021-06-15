import { useEffect } from 'react';
import { useCallback } from 'react';
import { FC } from 'react';
import { connect, ConnectedProps, useSelector } from "react-redux";
import { RouteComponentProps, withRouter } from 'react-router';
import { compose } from 'redux';
import { addPost, updateUserStatus, getProfileData, savePhoto,
    updateProfileProperties } from '../../../redux/Profile/ProfileReducer';
import { AppState } from '../../../redux/redux-store';
import Preloader from '../../Common/Preloader/Preloader';
import Profile from './Profile';
import Settings from './Settings/Settings';

type PropsFromRedux = ConnectedProps<typeof connector>
type PathParams = {userId: string}
type PropsFromRouter = RouteComponentProps<PathParams>
type Props = PropsFromRedux & PropsFromRouter

const ProfileContainer: FC<Props> = (props) => {

    const authUserId = useSelector((state: AppState) => state.auth.userId);
    const isFetching = useSelector((state: AppState) => state.profile.isFetching);
    const isSettingsMode = useSelector((state: AppState) => state.profile.isSettingsMode);
    const profile = useSelector((state: AppState) => state.profile.profile);

    const refreshProfile = useCallback(
        () => {
            let userId = parseInt(props.match.params.userId, 10) as number | null;
            if (!userId) {
                userId = authUserId;
                    if (!userId) props.history.push('/login');
            }
            props.getProfileData(userId, authUserId);
        }, [props, authUserId]
    )

    useEffect(() => {
        refreshProfile()
    }, [refreshProfile])

    useEffect(() => {
        if (!profile) {
            refreshProfile();
        }
    }, [profile, refreshProfile])

    const SettingsProps = {
            updateProfileProperties: props.updateProfileProperties,
            savePhoto: props.savePhoto,
    }
        return (
            isSettingsMode ?
                <Settings {...SettingsProps} /> :
            <>
                {isFetching && <Preloader type='profile' />}
                <Profile {...props} />
            </>
        )
}

const connector = connect(null, {addPost, getProfileData,
    updateUserStatus, savePhoto, updateProfileProperties})

export default compose(connector, withRouter)(ProfileContainer);