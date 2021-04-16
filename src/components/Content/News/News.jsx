import React from 'react';
import ThemeContext from '../../../utils/context/ThemeContext';
import ErrorBoundary from '../../../utils/errorBoundary/ErrorBoundary';
import Clock from '../../Common/Clock/Clock';
import FancyButton from './FancyButton';
//experimental component
const News = (props) => {
    const ref = React.createRef();
    const handleClick = () => {
        console.log('this button clicked');
    }
    return (
        <div>
            <ErrorBoundary>
                <ThemeContext.Provider value='dark'>
                    News
                    <Clock />
                </ThemeContext.Provider>
                <FancyButton label='Click Me!'
                    handleClick={handleClick}
                    ref={ref} />
            </ErrorBoundary>
        </div>
    );
}

export default News;