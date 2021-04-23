import React from 'react';
import Button from '../../../../Common/Button/Button';
import s from './Link.module.css';

const Link = ({getVisibility, filter, active, children, }) => {
    getVisibility(filter);
    return (
        <Button onClick={getVisibility}
            disabled={active}
            className={s.button}
            span={children} />
    );
}

export default Link;