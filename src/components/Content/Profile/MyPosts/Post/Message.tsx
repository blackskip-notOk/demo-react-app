import React, { FC } from "react";

type Props = {
    className: string
    post: string
}

const Message: FC<Props> =({className, post}) => {
    return (
        <span className={className}>{post}</span>
    );
}

export default Message;