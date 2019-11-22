import React from 'react';
import {RawApp as App} from './App';
import {shallow} from 'enzyme';

const defaultProps = {
  addCat: jest.fn(),
  cats: [{
    catId: 0,
    meows: 1,
    comments: [{userName: 'lol', commentary: 'hehe'}]
  },
  {
    catId: 1,
    meows: 0,
    comments: [{userName: 'lols', commentary: 'hehe'}]
  }]
};

it('renders the 2 cat containers', () => {
  const component = shallow(
    <App {...defaultProps}/>
  );
  expect(component.find('Cat').length).toBe(2)
});
