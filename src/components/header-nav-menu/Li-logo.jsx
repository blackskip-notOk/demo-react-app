import React from "react";
import s from "../../css/Li-logo.module.css";

const LiLogo = () => {
    return (
        <li className={s.li}>
            <img className={s.image} src="/public/logo.jpg" alt="site logo" />
        </li>
    );
}

export default LiLogo;