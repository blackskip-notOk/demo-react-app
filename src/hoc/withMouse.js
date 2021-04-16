import React from 'react';
import { Mouse } from '../components/Content/News/MouseTrecker';

const withMouse = (Component) => {
    return class extends React.Component {
        render() {
            return (
                <Mouse render={mouse => (
                    <Component {...this.props} mouse={mouse} />
                )} />
            );
        }
    }
}

export default withMouse;