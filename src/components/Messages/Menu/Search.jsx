import React from "react";
import s from './Search.module.css';

const Search = (props) => {
    return (
        <div className={s.div}>
            <figure className={`${props.icon} ${s.figure}`} />
                <input type="search" className={s.input} id="search" name="search" placeholder="Search..." />
        </div>
    );
}

export default Search;