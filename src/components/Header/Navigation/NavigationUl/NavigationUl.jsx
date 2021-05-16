import React from 'react';
import { NavLink } from 'react-router-dom';
import { createListFromArray } from '../../../../utils/object-helpers';
import Figure from '../../../Common/Figure/Figure';
import NavigationLi from './NavigationLi/NavigationLi';
import UnderText from './NavigationLi/UnderText/UnderText';
import s from './NavigationUl.module.css';
import st from './NavigationLi/NavIcon/NavIcon.module.css';

const NavigationUl = React.memo(({iconsHeader, authUserId,
    getProfileData, ...props}) => {
    let li = createListFromArray(iconsHeader, NavigationLi);

    const refreshProfile = () => {
        let userId = authUserId;
            if (!userId) props.history.push('/login');
        getProfileData(userId, authUserId);
    }
    return (
        <ul className={s.ul}>
            <div className={st.div}>
                <NavLink className={st.a}
                    to={`/profile/${authUserId}`}
                    activeClassName={st.active}
                    onClick={refreshProfile}>
                    <Figure icon={'fas fa-user-circle'}
                        className={st.figure}/>
                </NavLink>
                <UnderText undertext={'profile'}
                    className={st.divText}/>
            </div>
            {li}
        </ul>
    );
});

export default NavigationUl;