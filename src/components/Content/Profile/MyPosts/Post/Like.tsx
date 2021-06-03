import React, { FC } from "react";

type Props = {
    className: string
    classNameSpan: string
    likes: number
    likeIconClass: string
}

const Like: FC<Props> = ({className, classNameSpan, likes, likeIconClass}) => {
    return (
        <div className={className}>
            <i className={`${'fas fa-heart'} ${likeIconClass}`}></i>
            <span className={classNameSpan}>{likes}</span>
        </div>
    );
}

export default Like;