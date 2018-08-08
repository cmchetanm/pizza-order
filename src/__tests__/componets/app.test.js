import React from 'react'
import { shallow, mount, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import App from "../../components/app";
import { createStore } from "redux";
import reducers from "../../reducers";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const store = reducers();

test('<App /> renders', () => {
  const wrapper = shallow(
    <App store={store} />,
  );
  expect(wrapper).toMatchSnapshot();
});
