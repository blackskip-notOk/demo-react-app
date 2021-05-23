import React, { FunctionComponent } from 'react';
import Figure from '../Figure/Figure';

type FormErrorProps = {
    className: string
    icon: string
    figure: string
    message: string
}

export const FormError: FunctionComponent<FormErrorProps> = ({className, icon, figure, message}) => {
    return (
        <div className={className}>
            <Figure icon={icon} className={figure} />
            {message}
        </div>
    );
}