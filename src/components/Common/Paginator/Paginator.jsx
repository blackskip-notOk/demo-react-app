import React, { useState } from "react";
import Button from "../Button/Button";
import s from './Paginator.module.css';

const Paginator = ({totalCount, pageSize, onPageChanged,
    currentPage, portionSize = 10}) => {
    const [portionNumber, setPortionNumber] = useState(1);
    const pagesCount = Math.ceil(totalCount / pageSize);
    const pages= [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const leftPortionPageNumber = (portionNumber - 1) * (portionSize + 1);
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.divPages}>
            {portionNumber > 1 &&
                <Button type='button'
                    onClick={() => {
                        setPortionNumber(portionNumber - 1);
                    }}
                    span='back' />
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span key={p}
                        className={currentPage === p
                        ? s.spanChosen : s.spanUnchosen}
                        onClick={(e) => {
                            onPageChanged(p)}} >
                            {p}
                        </span>
                })
            }
            {portionCount > portionNumber &&
                <Button type='button'
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}
                    span='next' />
            }
        </div>
    );
}

export default Paginator;