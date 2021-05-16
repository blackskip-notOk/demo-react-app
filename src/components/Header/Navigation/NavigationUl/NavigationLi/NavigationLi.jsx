import React from "react";
import NavIcon from './NavIcon/NanIcon';

const NavigationLi = React.memo(({pathway, icon, undertext}) => {
    return (
        <li>
            <NavIcon
                pathway={pathway}
                icon={icon}
                undertext={undertext}/>
        </li>
    );
});

export default NavigationLi;