import React, { Component, useReducer } from 'react';
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

const INCREMENT = 'INCREMENT';
const DECREMENT ='DECREMENT';
const RESET = 'RESET';

function init(initialCount) {
    return {count: initialCount};
}

function reducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            return {count: state.counr + 1};
        case DECREMENT:
            return {count: state.count - 1};
        case RESET:
            return init(action.payload);
        default:
            throw new Error();
    }
}

const Counter = ({initialCount}) => {
    const [state, dispatch] = useReducer(reducer, initialCount,
        init);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: RESET,
                payload: initialCount})}>
                Reset
            </button>
            <button onClick={() => dispatch({type: DECREMENT})}>
                minus 1
            </button>
            <button onClick={() => dispatch({type: INCREMENT})}>
                plus 1
            </button>
        </>
    );
}

export default withConsoleLog(Clock);