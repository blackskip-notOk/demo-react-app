import React from "react";
import s from './Footer.module.css';

const Footer = (props) => {
    return (
        <footer className={s.footer}>
            {props.info}
        </footer>
    );
}

export default Footer;