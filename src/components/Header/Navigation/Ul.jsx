import React from 'react';
import s from './Ul.module.css';
import Li from './Li/Li';

const Ul = (props) => {
    let li = props.state.map( l => <Li pathway={l.pathway}
        icon={l.icon}
        undertext={l.undertext} />
    );
debugger;
    return (
        <ul className={s.ul}>
            {li}
        </ul>
    );
}

export default Ul;