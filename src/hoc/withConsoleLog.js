import React from 'react';

const withConsoleLog = (Component) => {
    class LogProps extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('old props', prevProps);
            console.log('new props', this.props);
        }

        render() {
            const {forwardedRef, ...rest} = this.props;
            return <Component ref={forwardedRef} {...rest} />;
        }
    }

    function forwardRef(props, ref) {
        return <LogProps {...props} forwardedRef={ref} />;
    }

    const name = Component.displayName || Component.name;
    forwardRef.displayName = `withConsoleLog(${name})`;

    return React.forwardRef(forwardRef);
}

export default withConsoleLog;