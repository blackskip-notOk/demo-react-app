import React, { useState } from "react";
import Figure from "../Figure/Figure";
import s from './Search.module.css';

const Search = React.memo(({search}) => {
    const [searchValue, setSearchValue] = useState('');
    const [visibility, setVisibility] = useState(false);

    const switchSearch = () => {
        setVisibility(!visibility);
    };

    const onSearchChange = (e) => {
        setSearchValue(e.currentTarget.value);
    }
    return (
        <div className={s.searchDiv}>
            <Figure icon={search}
                className={s.figure}
                onClick={switchSearch} />
            {visibility && <input type='search'
                value={searchValue}
                onChange={onSearchChange}
                className={s.searchInput}
                placeholder='Search...' />
            }
        </div>
    );
});

export default Search;