import React from 'react';
import ReactDOM from 'react-dom';
import MyMap from '../components/MyMap';
import { renderWithRedux } from './renderWithRedux'

describe("MyMap", () => {

  describe("rendering of map", () => {
    it('renders without crashing LogOut', () => {
      const { } = renderWithRedux(<MyMap />)
    })
  })

  /*describe("rendering of map", () => {
    it('renders without crashing LogOut', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <MyMap />, div
      );
      ReactDOM.unmountComponentAtNode(div);
    })
  })*/
});

