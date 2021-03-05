import React from "react";
import s from './Li.module.css';
import NavIcon from './NavIcon/NanIcon';

const Li = (props) => {
    return (
        <li className={s.li}>
            <NavIcon
                pathway={props.pathway}
                target={props.tagret}
                icon={props.icon}
                undertext={props.undertext} />
        </li>
    );
}
export default Li;