import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Search from '../components/search';
describe('Search', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Search/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

describe('Test Button component', () => {
    it('Test click event', () => {
      const mockCallBack = jest.fn();
      const button = shallow(<Search onClick={mockCallBack}/>);
      button.find('.mainSearchButton').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });

 it("onChange param is the same value as the input value", () => {
    const input = mount(<Search/>).find('input');
    var inputDOM = input.getDOMNode(); 
    input.simulate('change', { target: { value: 'Changed' } })
    expect(inputDOM.value).toEqual('Changed');
    });

   
    