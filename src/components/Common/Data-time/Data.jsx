import React from 'react';

const Data = (props) => {
    return (
        <div className={props.divData}>
            <span>{props.data}</span>
        </div>
    );
}

export default Data;