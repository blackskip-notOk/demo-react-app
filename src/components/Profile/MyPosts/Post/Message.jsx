import React from "react";

const Message =(props) => {
    return (
        <span className={props.className}>{props.message}</span>
    );
}

export default Message;