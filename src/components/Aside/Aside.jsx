import React from "react";
import s from './Aside.module.css';

const Aside = (props) => {
    return (
        <aside className={s.aside}>
            {props.news}
        </aside>
    );
}

export default Aside;