import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Search } from '../components/search';

describe('Search', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Search/>,
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
