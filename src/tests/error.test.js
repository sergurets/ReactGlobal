import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Error from '../components/error';

describe('Error', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Error/>,
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
