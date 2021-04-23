import React, { Component } from 'react';

export class Mouse extends Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 }
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        });
    }

    render() {
        return(
            <div onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

class MouseTracker extends Component {
    render() {
        return(
            <>
                <h1>Move your mouse</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )} />
            </>
        );
    }
}

export default MouseTracker;