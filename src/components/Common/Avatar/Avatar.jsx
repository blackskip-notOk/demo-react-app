import React from "react";
import noAvatar from '../../../image/avatars/noAvatar.png';

const Avatar = ({src, alt, className}) => {
    return (
        <img src={src || noAvatar} alt={alt}
        className={className} />
    );
}

export default Avatar;