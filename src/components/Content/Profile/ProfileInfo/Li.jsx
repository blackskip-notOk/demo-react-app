import React from "react";
import Figure from "../../../Common/Figure/Figure";

const Li = (props) => {
    return (
        <li>
            <Figure className={props.className}
                icon={props.icons.icon} />
                {props.contact}
        </li>
    );
}

export default Li;