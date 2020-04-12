import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

test('renders learn react link', () => {
  const wrapper = render(<Provider store={store}><App /></Provider>);
  expect(wrapper).toBeDefined();
});
