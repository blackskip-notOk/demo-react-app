import React from 'react';

const Textarea = (props) => {
    let newPostText = React.createRef();

    return (
        <div>
            <textarea
                ref={newPostText}
                placeholder={props.placeholder}
                cols={props.cols} rows={props.rows}>
            </textarea>
        </div>
    );
}

export default Textarea;