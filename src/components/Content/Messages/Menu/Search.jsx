import React from "react";
import Figure from "../../../Common/Figure/Figure";
import Input from '../../../Common/Input/Input';
import s from './Search.module.css';

const Search = (props) => {
    return (
        <div className={s.div}>
            <Figure icon={props.icon} className={props.figure} />
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