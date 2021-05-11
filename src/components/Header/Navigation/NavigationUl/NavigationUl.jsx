import React from 'react';
import { NavLink } from 'react-router-dom';
import { createListFromArray } from '../../../../utils/object-helpers';
import Figure from '../../../Common/Figure/Figure';
import Li from './Li/Li';
import UnderText from './Li/UnderText/UnderText';
import s from './NavigationUl.module.css';
import st from './Li/NavIcon/NavIcon.module.css';

const NavigationUl = ({iconsHeader, authUserId, getProfileData, ...props}) => {
    let li = createListFromArray(iconsHeader, Li);

    const refreshProfile = () => {
        let userId = authUserId;
            if (!userId) {
                props.history.push('/login');
            }
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
}

export default NavigationUl;