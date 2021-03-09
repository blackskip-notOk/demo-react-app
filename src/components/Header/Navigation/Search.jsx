import React from "react";
import Figure from '../../Common/Figure/Figure';
import Input from '../../Common/Input/Input';
import s from './Search.module.css';

const Search = (props) => {
    let figure = props.search.map( f => <Figure icon={f.icon}
        className={s.figure} key={f.id} /> );
    return (
        <div className={s.div}>
            {figure}
            <Input
            type="search"
            className={s.input}
            id="search"
            name="search"
            placeholder="Search..." />
        </div>
    );
}

export default Search;