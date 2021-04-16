import React from "react";
import NavIcon from './NavIcon/NanIcon';

const Li = ({pathway, icon, undertext}) => {
    return (
        <li>
            <NavIcon
                pathway={pathway}
                icon={icon}
                undertext={undertext}/>
        </li>
    );
}
export default Li;