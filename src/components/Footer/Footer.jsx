import React from "react";
import s from './Footer.module.css';

const Footer = ({info, ...props}) => {
    return (
        <footer className={s.footer}>
            {info}
            {props.children}
        </footer>
    );
}

export default Footer;