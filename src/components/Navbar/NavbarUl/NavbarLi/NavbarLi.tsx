import { FC } from "react";
import { NavLink } from 'react-router-dom';
import s from './NavbarLi.module.css';

type Props = {
    pathway: string
    target: string
    notation: string
}
const NavbarLi: FC<Props> = ({pathway, target, notation}) => {
    return (
        <li className={s.linkLi}>
            <NavLink className={s.link}
                to={pathway}
                target={target}
                activeClassName={s.linkActive}>
                {notation}
            </NavLink>
        </li>
    );
}

export default NavbarLi;