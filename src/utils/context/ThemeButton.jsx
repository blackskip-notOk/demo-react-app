import React, { Component } from 'react';
import Button from '../../components/Common/Button/Button';
import ThemeContext from './ThemeContext';

class ThemedButton extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {({theme, toogleTheme}) => (
                    <Button {...this.props}
                        onClick={toogleTheme}
                        span='Toogle Theme'
                        style={{color: theme?.color}} />
                )}
        </ThemeContext.Consumer>
    );
    }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;