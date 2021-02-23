import React from "react";
import s from "../../css/Li-lessons.module.css";

const LiLessons = () => {
    return (
        <li className={s.li}>
            <div className={s.div}>
                <a className={s.a} href="https://learn.javascript.ru/microtask-queue">
                    <i className="fab fa-galactic-senate"></i>
                </a>
                <div className={s.divText}>
                    <span>LESSONS</span>
                </div>
            </div>
        </li>
    );
}

export default LiLessons;