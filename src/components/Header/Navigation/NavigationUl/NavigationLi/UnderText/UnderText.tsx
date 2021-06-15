import React from "react";
import { FC } from "react";

interface Props {
    className: string
    undertext: string
}

const UnderText: FC<Props> = React.memo(({className, undertext}) => {
    return (
        <div className={className}>
            {undertext}
        </div>
    );
});

export default UnderText;