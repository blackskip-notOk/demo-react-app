import React from "react";
import { createInput } from "../../../utils/form-helper";
import Figure from "../Figure/Figure";
import s from './Search.module.css';


const Search = ({search, title}) => {
    const inputClass = s.input;
    return (
        <div className={s.div}>
            <Figure icon={search.icon}
                className={s.figure} />
            {createInput (null, null, {type: 'search',
                inputClass: inputClass,
                id: 'search',
                placeholder: 'Search...',
                title: title,
            })}
        </div>
    );
}

export default Search;