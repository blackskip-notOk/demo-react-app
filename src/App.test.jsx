import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './App';

it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
 });