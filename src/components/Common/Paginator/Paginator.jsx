import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import s from './Paginator.module.css';

const Paginator = React.memo(({portionSize, requestUsers, pageSize, pages,
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
                .map(p => {return <NavLink to={`/users/page=${currentPage}`}>
                        <span key={p}
                            className={currentPage === p
                            ? s.spanChosen : s.spanUnchosen}
                            onClick={() => {onPageChanged(p)}} >
                            {p}
                        </span>
                    </NavLink>
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
})

export default Paginator;