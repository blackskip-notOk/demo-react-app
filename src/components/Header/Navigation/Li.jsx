import React from "react";
import s from './Li.module.css';

const Li = (props) => {
    return (
        <li className={s.li}>
            <div className={s.div}>
                <a className={s.a} href={props.href}>
                    <figure className={props.icon} />
                </a>
                <div className={s.divText}>
                    {props.notation}
                </div>
            </div>
        </li>
    );
}

export default Li;