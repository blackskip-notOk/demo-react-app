import React from 'react';

const Textarea = (props) => {
    return (
        <div>
            <textarea
                placeholder={props.placeholder}
                cols={props.cols} rows={props.rows}>
            </textarea>
        </div>
    );
}

export default Textarea;