import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Item from '../components/item';

const data = [
    {
      budget:null,
      genres:[],
      id:null,
      overview:'',
      poster_path:null,
      release_date:"",
      revenue:null,
      runtime:null,
      tagline: null,
      title:null,
      vote_average:null,
      vote_count:null
    }      
  ]
describe('Item', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Item data={data}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});