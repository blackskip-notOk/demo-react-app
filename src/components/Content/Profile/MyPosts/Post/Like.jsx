import React from "react";

const Like = (props) => {
    return (
        <div className={props.className}>
            <span className={props.classNameSpan}>Like {props.likes}</span>
        </div>
    );
}

export default Like;