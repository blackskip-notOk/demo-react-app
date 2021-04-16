import React from 'react';
import Figure from '../Figure/Figure';

export const FormError = ({className, icon, figure, message}) => {
    return (
        <div className={className}>
            <Figure icon={icon} className={figure} />
            {message}
        </div>
    );
}