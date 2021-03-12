import React from "react";
import StoreContext from '../../StoreContext.js';
import Aside from './Aside';

const AsideContainer = () => {
    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();
                return (
                    <Aside
                    advs={state.aside.advs} />
                );
            }
            }
        </StoreContext.Consumer>
    );
}

export default AsideContainer;