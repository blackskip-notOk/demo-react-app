import React from 'react';
import withConsoleLog from '../../../../hoc/withConsoleLog';

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className='FancyButton'>
        {props.children}
    </button>
));

const ref = React.createRef();
<FancyButton ref={ref}>Click Me!</FancyButton>;

// class FancyButton extends React.Component {
//     focus() {

//     }
// }

export default withConsoleLog(FancyButton);