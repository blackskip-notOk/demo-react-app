import React, { FunctionComponent } from "react";

type FigureProps = {
    icon: string
    className: string
    onClick?: any
}
const Figure: FunctionComponent<FigureProps> = React.memo(({icon, className, onClick}) => {
    return (
        <figure onClick={onClick} className={`${icon} ${className}`} />
    );
});

export default Figure;