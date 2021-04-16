import React from "react";

const Like = ({className, classNameSpan, likes}) => {
    return (
        <div className={className}>
            <span className={classNameSpan}>Like {likes}</span>
        </div>
    );
}

export default Like;