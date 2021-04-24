import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Page from "./Page/Page";
import s from './Paginator.module.css';
/*
problem: after update page url stay with page=p, but load current page =1.
When page updated i want to stay on page=p, or url stay with page=currentPage.  
*/
const Paginator = ({portionSize, requestUsers, pageSize, pages,
    currentPage, portionCount}) => {
    const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));

    const leftPortion = (portionNumber - 1) * portionSize + 1;
    const rightPortion = portionNumber * portionSize;
    const onPageChanged = (pageNumber) => {
        requestUsers(pageNumber, pageSize);
    }
    return (
        <div className={s.divPages}>
            {portionNumber >= 2 && <Button type='button' onClick={() => {
                setPortionNumber(1);}} span='first page' />}
            {portionNumber > 1 && <Button type='button' onClick={() => {
                setPortionNumber(portionNumber - 1);}} span='back' />
            }
            {pages
                .filter(p => p >= leftPortion && p <= rightPortion)
                .map(p => {return <Page key={p} path={`/users/page=${p}`}
                    currentPage={currentPage}
                    chosenPage={p}
                    onPageChanged ={onPageChanged} />
                })
            }
            {portionCount > portionNumber && <Button type='button'
                onClick={() => {setPortionNumber(portionNumber + 1)}}
                span='next' />
            }
            {portionCount > portionNumber && <Button type='button'
                onClick={() => {setPortionNumber(portionCount);}}
                span='last page' />}
        </div>
    );
}

export default Paginator;