import React from 'react';
import s from './LastMessage.module.css';

const LastMessage = (props) => {
    return (
        <div className={s.div}>
            <p className={s.p}>
                Когда вы смотрите на Темную сторону, вы должны
                быть осторожны, потому что Темная сторона
                оглядывается в ответ 
            </p>
        </div>
    );
}

export default LastMessage;