import React from "react";
import s from "../../css/Li-home.module.css";

const LiHome = () => {
    return (
        <li className={s.li}>
            <div className={s.div}>
                <a className={s.a} href="https://github.com/">
                    <i className="fab fa-galactic-republic"></i>
                </a>
                <div className={s.divText}>
                    <span>HOME</span>
                </div>
            </div>
        </li>
    );
}

export default LiHome;