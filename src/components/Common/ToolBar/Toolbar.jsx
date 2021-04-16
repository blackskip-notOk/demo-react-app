import React, { Component } from "react";
import ThemedButton from "../../../utils/context/ThemeButton";
import ThemeContext, { themes } from "../../../utils/context/ThemeContext";

const Toolbar = (props) => {
  return (
    <ThemedButton onClick={props.changeTheme}>
        Change Theme
    </ThemedButton>
  );
}

class ToolbarFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes?.light
    };

    this.toggleTheme = () => {this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark
        }));
    };
  }

  render() {
    return (
        <>
            <ThemeContext.Provider value={this.state.theme}>
                <Toolbar changeTheme={this.toggleTheme} />
            </ThemeContext.Provider>
            <ThemedButton />
        </>
    );
  }
}

export default ToolbarFlow;