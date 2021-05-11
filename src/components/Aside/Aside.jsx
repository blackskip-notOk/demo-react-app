import React from "react";
import Adversting from './Adversting/Adversting';
import s from './Aside.module.css';

const Aside = (props) => {
        let adv = props.advs.map( a => <Adversting
        text={a.text}
        key={a.id}
        id={a.id} />
    );

    return (
        <aside className={s.aside}>
            <div className={s.innerAside}>
                {/* {adv} */}
            </div>
            {props.children}
        </aside>
    );
}

export default Aside;