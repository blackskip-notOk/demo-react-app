import React from 'react';
import Li from './Li/Li';
import s from './Ul.module.css';

const Ul = (props) => {
    let li = props.iconsHeader.map( l => <Li pathway={l.pathway}
        icon={l.icon} undertext={l.undertext} key={l.id} />
    );
    return (
        <ul className={s.ul}>
            {li}
        </ul>
    );
}

export default Ul;