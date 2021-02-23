import React from "react";
import s from "../../css/Li-video.module.css";

const LiVideo = () => {
    return (
        <li className={s.li}>
            <div className={s.div}>
                <a className={s.a} href="https://www.youtube.com/">
                    <i className="fab fa-jedi-order"></i>
                </a>
                <div className={s.divText}>
                    <span>VIDEO</span>
                </div>
            </div>
        </li>
    );
}

export default LiVideo;