import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Item } from '../components/item';

const data = [
  {
    title: '',
    id: '',
    poster_path: '',
    release_date: '0',
    genres: [''],
  },
];
describe('Item', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Item data={data}/>,
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
