import React, { Component } from 'react';
import Button from '../../components/Common/Button/Button';
import ThemeContext from './ThemeContext';

const ThemedButton =(props) => {
    return (
        <ThemeContext.Consumer>
            {({theme, toogleTheme}) => (
                <Button {...props}
                    onClick={toogleTheme}
                    span='Toogle Theme'
                    style={{color: theme?.color}} />
            )}
        </ThemeContext.Consumer>
    );
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;