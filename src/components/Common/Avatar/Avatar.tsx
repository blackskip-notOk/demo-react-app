import React, { FC } from "react";
import noAvatar from '../../../image/avatars/noAvatar.png';

interface AvatarProps {
    src: string
    alt: string
    className: string
}

const Avatar: FC<AvatarProps> = React.memo(({src, alt, className}: AvatarProps) => (
    <img src={src || noAvatar} alt={alt} className={className} />
))

export default Avatar