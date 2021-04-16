import React, { Component, useEffect, useState } from 'react';
import withConsoleLog from '../../../hoc/withConsoleLog';
import ThemedButton from '../../../utils/context/ThemeButton';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), isToggleOn: false};
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleClick = () => this.setState(state => ({isToggleOn: !state.isToggleOn}));

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                {this.state.isToggleOn
                ? <ThemedButton onClick={this.handleClick}
                    span={`Now ${this.state.date.toLocaleTimeString()}`} />
                : <ThemedButton onClick={this.handleClick}
                    span='Turn on' />
                }
            </div>
        );
    }
}

const Counter = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click On Me!
            </button>
        </div>
    );
}

export default withConsoleLog(Clock);