import React from "react";

const Message =({className, id, post}) => {
    return (
        <span className={className}>{id} {post}</span>
    );
}

export default Message;