import React from "react";

const Like = ({className, classNameSpan, likes, likeIconClass}) => {
    return (
        <div className={className}>
            <i className={`${'fas fa-heart'} ${likeIconClass}`}></i>
            <span className={classNameSpan}>{likes}</span>
        </div>
    );
}

export default Like;