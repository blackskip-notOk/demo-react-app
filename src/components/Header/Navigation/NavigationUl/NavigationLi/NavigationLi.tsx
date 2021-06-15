import React from "react";
import { FC } from "react";
import NavIcon from './NavIcon/NanIcon';

interface Props {
    pathway: string
    icon: string
    undertext: string
}

const NavigationLi: FC<Props> = React.memo(({pathway, icon, undertext}) => {
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