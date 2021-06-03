import React, { FC } from "react";

type Props = {
    icon: string
    className: string
    onClick?: any
}
const Figure: FC<Props> = React.memo(({icon, className, onClick}) => {
    return (
        <figure onClick={onClick} className={`${icon} ${className}`} />
    );
});

export default Figure;