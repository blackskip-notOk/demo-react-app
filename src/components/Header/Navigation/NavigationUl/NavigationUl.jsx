import React from 'react';
import { createListFromArray } from '../../../../utils/object-helpers';
import Li from './Li/Li';
import s from './NavigationUl.module.css';

const NavigationUl = ({iconsHeader}) => {
    let li = createListFromArray(iconsHeader, Li);
    return (
        <ul className={s.ul}>
            {li}
        </ul>
    );
}

export default NavigationUl;