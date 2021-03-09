import React from "react";

const Message =(props) => {
    return (
        <span className={props.className}>{props.post}</span>
    );
}

export default Message;