import React from "react";
import Figure from '../../Common/Figure/Figure';
import s from './Search.module.css';


const Search = (props) => {
    return (
        <div className={s.div}>
            <Figure icon={props.search.icon}
            className={s.figure} key={props.search.id} />
            <input
            type="search"
            className={s.input}
            id="search"
            name="search"
            placeholder="Search..." />
        </div>
    );
}

export default Search;