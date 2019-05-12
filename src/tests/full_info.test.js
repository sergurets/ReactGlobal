import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Full_info from '../components/full_info';

const data = [
    {
      budget:null,
      genres:[],
      overview:'overview',
      poster_path:'poster_path',
      release_date:"release_date",
      runtime:'runtime',
      title:'title',
    }      
  ]


describe('full_info', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Full_info
        overview={data.overview} 
        title={data.title} 
        runtime={data.runtime}
        release_date={data.release_date}  
        poster_path={data.poster_path}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
