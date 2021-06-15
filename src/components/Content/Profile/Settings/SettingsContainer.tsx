import { FC, useEffect } from 'react';
import { connect, ConnectedProps, useSelector } from 'react-redux';
import { updateProfileProperties, getUserProfile } from '../../../../redux/Profile/ProfileReducer';
import Settings from './Settings';
import { AppState } from '../../../../redux/redux-store';

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const SettingsContainer: FC<Props> = (props) => {
    const authUserId = useSelector((state: AppState) => state.auth.userId);

    useEffect(() => {
        getUserProfile(authUserId);
    }, [authUserId]);

    return (
        <Settings {...props} />
    );
}

const connector = connect(null, {updateProfileProperties, getUserProfile});

export default connect(connector)(SettingsContainer);