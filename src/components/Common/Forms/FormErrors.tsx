import React, { FC } from 'react';
import Figure from '../Figure/Figure';

type Props = {
    className: string
    icon: string
    figure: string
    message: string
}

export const FormError: FC<Props> = ({className, icon, figure, message}) => {
    return (
        <div className={className}>
            <Figure icon={icon} className={figure} />
            {message}
        </div>
    );
}