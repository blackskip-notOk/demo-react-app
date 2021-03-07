import React from 'react';
import Li from './Li';
import s from './Ul.module.css';

const Ul = (props) => {
    let li = props.lies.map( l => <Li
        pathway={l.pathway}
        target={l.target}
        notation={l.notation} />
    );

    return (
        <ul className={s.ul}>
            {li}
        </ul>
    );
}

export default Ul;
