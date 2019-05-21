import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import {App} from '../App';
describe('ItemInfo', () => {
  it('should render correctly', () => {
    const output = shallow(
      <App/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});