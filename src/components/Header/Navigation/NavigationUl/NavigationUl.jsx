import React from 'react';
import { NavLink } from 'react-router-dom';
import { createListFromArray } from '../../../../utils/object-helpers';
import Figure from '../../../Common/Figure/Figure';
import Li from './Li/Li';
import UnderText from './Li/UnderText/UnderText';
import s from './NavigationUl.module.css';
import st from './Li/NavIcon/NavIcon.module.css';
/*
Problem: 1 - how organize FLUX flow of /profile/${...} to Redux state and return pathway with Id
    2 - how refresh profile when onClick on Profile icon and URL id is changed
*/
const NavigationUl = ({iconsHeader, authUserId}) => {
    let li = createListFromArray(iconsHeader, Li);
    return (
        <ul className={s.ul}>
            <div className={st.div}>
                <NavLink className={st.a}
                    to={`/profile/${authUserId}`}
                    activeClassName={st.active}>
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