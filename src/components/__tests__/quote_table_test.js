import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuoteList from '../quote_table';

Enzyme.configure({adapter: new Adapter()});

test('quote table renders correctly', () => {
  const component = shallow(<QuoteList />)
  expect(component).toMatchSnapshot();
})
