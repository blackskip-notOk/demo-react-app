import React from 'react';
import Li from './Li';
import s from './Ul.module.css';

const Ul = (props) => {
    let link = props.links.map( l => <Li pathway={l.pathway}
        target={l.target} notation={l.notation} key={l.id} />
    );

    return (
        <ul className={s.ul}>
            {link}
        </ul>
    );
}

export default Ul;
