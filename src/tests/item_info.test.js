import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { ItemInfo } from '../components/item_info';
describe('ItemInfo', () => {
  it('should render correctly', () => {
    const output = shallow(
      <ItemInfo/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
