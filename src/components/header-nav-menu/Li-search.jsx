import React from "react";
import s from "../../css/Li-search.module.css";

const LiSearch = () => {
    return (
        <li className={s.li}>
            <div className={s.div}>
                <span className={s.span}><i className="fas fa-jedi"></i></span>
                    <input type="search" id="search" name="search" placeholder="Search..." />
            </div>
        </li>
    );
}

export default LiSearch;