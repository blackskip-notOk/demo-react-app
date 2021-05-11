import React from "react";

const Message =({className, post}) => {
    return (
        <span className={className}>{post}</span>
    );
}

export default Message;