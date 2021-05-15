import React from "react";
import s from './Footer.module.css';

const Footer = (props) => {
    return (
        <footer className={s.footer}>
            <span className={s.footerSpan}>Someday there will be information about creator</span>
        </footer>
    );
}

export default Footer;