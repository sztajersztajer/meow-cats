import React from 'react';
import {RawApp as App} from './App';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import store from './store'


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

it('renders the cat container', () => {
  const component = renderer.create(
    <Provider store={store}>
      <App {...defaultProps}/>
    </Provider>
  );
  console.log(component)
});
