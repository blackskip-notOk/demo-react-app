import { NavLink } from "react-router-dom";
import s from './Logo.module.css';
import logo from '../../../image/logo/logo.png';

const Logo = () => {
    return (
        <NavLink to='/' target='_self'>
            <img className={s.img} src={logo} alt='site-logo' />
        </NavLink>
    );
}

export default Logo;