import React from 'react';

export const themes = {
    light: {
        color: '#000000',
        background: '#eeeeee',
    },
    dark: {
        color: '#000000',
        background: '#eeeeee',
    }
}

const ThemeContext = React.createContext({
    theme: themes.light,
    toogleTheme: () => {}
});
ThemeContext.displayName = 'Theme';

export default ThemeContext;