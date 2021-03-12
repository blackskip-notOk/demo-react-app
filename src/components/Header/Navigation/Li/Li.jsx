import React from "react";
import NavIcon from './NavIcon/NanIcon';

const Li = (props) => {
    return (
        <li>
            <NavIcon
                pathway={props.pathway}
                icon={props.icon}
                undertext={props.undertext}/>
        </li>
    );
}
export default Li;