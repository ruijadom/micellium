import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Topbar } from '../stories/Topbar.stories';

describe('Topbar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Topbar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
