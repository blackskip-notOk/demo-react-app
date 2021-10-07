import React, { FC } from "react";
import noAvatar from '../../../images/avatars/noAvatar.png';

type Props = {
    src: string | null | undefined
    alt: string
    className: string
}

const Avatar: FC<Props> = React.memo(({src, alt, className}) => (
    <img src={src || noAvatar} alt={alt} className={className} />
))

export default Avatar