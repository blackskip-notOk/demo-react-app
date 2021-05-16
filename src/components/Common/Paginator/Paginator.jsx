import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Page from "./Page/Page";
import s from './Paginator.module.css';
/*
problem: after update page url stay with page=p, but load current page =1.
When page updated i want to stay on page=p, or url stay with page=currentPage.
*/
const Paginator = React.memo(({portionSize, requestUsers, pageSize, pages,
    currentPage, portionCount, paginatorIcons}) => {
    const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));

    useEffect(() => {
        setPortionNumber(portionNumber)
    }, [portionNumber]);

    const leftPortion = (portionNumber - 1) * portionSize + 1;
    const rightPortion = portionNumber * portionSize;
    const onPageChanged = (pageNumber) => {
        requestUsers(pageNumber, pageSize);
    }
    return (
        <div className={s.divPages}>
            <div className={s.backButtons}>
                {portionNumber >= 2 &&
                    <NavLink to={`/users/page=1`} className={s.firstPageLink}>
                        <Button type='button'
                            onClick={() => {setPortionNumber(1);
                            onPageChanged(1)}}
                            className={s.edgePageButton}
                            spanClass={s.edgePageSpan}
                            span='first page' />
                    </NavLink>}
                {portionNumber > 1 &&
                    <Button type='button'
                        onClick={() => {setPortionNumber(portionNumber - 1);}}
                        className={s.portionButton}
                        spanClass={s.portionSpan}
                        span='prev 10' />
                }
                {currentPage > 1 &&
                    <NavLink to={`/users/page=${currentPage - 1}`}
                        className={s.switchPageLink}>
                        <Button type='button'
                            onClick={() => {onPageChanged(currentPage - 1)}}
                            className={s.switchButton}
                            spanClass={s.switchSpan}
                            span={<i className={paginatorIcons.prevPage}></i>} />
                    </NavLink>
                }
            </div>
            {pages
                .filter(p => p >= leftPortion && p <= rightPortion)
                .map(p => {return <Page key={p}
                    path={`/users/page=${p}`}
                    currentPage={currentPage}
                    chosenPage={p}
                    onPageChanged ={onPageChanged} />
                })
            }
            <div className={s.nextButtons}>
                {currentPage < pages.length &&
                    <NavLink to={`/users/page=${currentPage + 1}`}
                        className={s.switchPageLink}>
                        <Button type='button'
                            onClick={() => {onPageChanged(currentPage + 1)}}
                            className={s.switchButton}
                            spanClass={s.switchSpan}
                            span={<i className={paginatorIcons.nextPage}></i>} />
                    </NavLink>
                }
                {portionCount > portionNumber &&
                    <Button type='button'
                        onClick={() => {setPortionNumber(portionNumber + 1)}}
                        span='next 10'
                        className={s.portionButton}
                        spanClass={s.portionSpan} />
                }
                {portionCount > portionNumber &&
                    <NavLink to={`/users/page=${pages.length}`} className={s.firstPageLink}>
                        <Button type='button'
                            onClick={() => {setPortionNumber(portionCount);
                            onPageChanged(pages.length)}}
                            className={s.edgePageButton}
                            spanClass={s.edgePageSpan}
                            span='last page' />
                    </NavLink>
                }
            </div>
        </div>
    );
});

export default Paginator;