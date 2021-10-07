import { NavLink } from "react-router-dom";
import s from './Logo.module.css';
import logo from '../../../images/logo/logo.png';
import { FC } from "react";

const Logo: FC = () => {
    return (
        <NavLink to='/' target='_self'>
            <img className={s.img} src={logo} alt='site-logo' />
        </NavLink>
    );
}

export default Logo;