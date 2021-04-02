import React from 'react';
import Figure from '../Figure/Figure';

export const FormError = (props) => {
    return (
        <div className={props.className}>
            <Figure icon={props.icon} className={props.figure} />
            {props.message}
        </div>
    );
}