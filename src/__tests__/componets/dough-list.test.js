import React from 'react'
import { shallow, mount, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import DoughList from "../../containers/dough-list";
import { createStore } from "redux";
import reducers from "../../reducers";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const store = reducers();

test('Renders broker code', () => {
  const renderedValue =  renderer.create(<DoughList store={createStore(reducers)} />).toJSON()
  expect(renderedValue).toMatchSnapshot();
});
