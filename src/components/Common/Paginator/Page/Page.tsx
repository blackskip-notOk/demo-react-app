import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Page.module.css';

type Props = {
    path: string
    currentPage: number
    chosenPage: number
    onPageChanged: (pageNumber: number) => void
}
const Page: FC<Props> = React.memo(({
    path, currentPage, chosenPage, onPageChanged}) => {
    return (
        <NavLink to={path}>
            <li className={currentPage === chosenPage
                ? s.spanChosen : s.spanUnchosen}
                onClick={() => {onPageChanged(chosenPage)}} >
                {chosenPage}
            </li>
        </NavLink>
    );
});

export default Page;