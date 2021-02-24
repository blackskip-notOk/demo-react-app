import React from "react";
import s from './Li-friends.module.css';

const LiFriends = (props) => {
    return (
        <li className={s.li}>
            <div className={s.div}>
                <a className={s.a} href="https://www.facebook.com/friends">
                    <i className="fab fa-old-republic"></i>
                </a>
                <div className={s.divText}>
                    <span>{props.name}</span>
                </div>
            </div>
        </li>
    );
}

export default LiFriends;