import React from 'react';
import Link from '../LInk/Link';

const FooterTodoList = ({getVisibility, active}) => {
    return (
        <>
            <span>Show: </span>
            <Link getVisibility={getVisibility}
                active={true}>All</Link>
            <Link getVisibility={getVisibility}
                active={active}>Active</Link>
            <Link getVisibility={getVisibility}
                active={active}>Completed</Link>
        </>
    );
}

export default FooterTodoList;