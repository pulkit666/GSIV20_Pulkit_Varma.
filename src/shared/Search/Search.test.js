import React from 'react';
import { mount,shallow } from 'enzyme';
import { Provider } from "react-redux";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';
import {mapDispatchToProps} from './Search';
import { render } from '@testing-library/react';
import configureMockStore from "redux-mock-store";
import { act } from 'react-dom/test-utils';

const mockStore = configureMockStore();
let store = mockStore({ filterValue: '' });

describe('test the Search hook', () => {
    configure({ adapter: new Adapter() });

    it('the Search page should be rendered', () => {

        const props = {
            setFilter: jest.fn()
        }
        const { container } = render(
            <Provider store={store}>
                <Search {...props} />
            </Provider>
        );
        expect(container).toBeDefined();

    });

    it('test onChange event with no value being passed', () => {
        const setFilter = jest.fn();
        const event = {
            preventDefault() { },
            target: { value: '' }
        };
        const wrapper = mount(
            <Provider store={store}>
                <Search setFilter={setFilter} />
            </Provider>
        );
        const inputElement = wrapper.find('input').props();
        expect(inputElement.placeholder).toEqual('Search');
        act(() => inputElement.onChange(event));
        // expect(setFilter).toHaveBeenCalled();
    })

    it('test onChange event with value being passed', () => {
        const setFilter = function(){
        }
        const event = {
            preventDefault() { },
            target: { value: 'change' }
        };
        const wrapper = mount(
            <Provider store={store}>
                <Search setFilter={setFilter} />
            </Provider>
        );
        const inputElement = wrapper.find('input').props();
        expect(inputElement.placeholder).toEqual('Search');
        act(() => inputElement.onChange(event));
        // expect(setFilter).toHaveBeenCalled();
    });

    it("checking dispatchToProps setFilter function", () => {
        const dispatch = jest.fn();
        mapDispatchToProps (dispatch).setFilter('check');
        expect(dispatch.mock.calls[0][0]).toEqual({
          type: "SET_FILTER_TYPE",
          payload: 'check'
        });
      });
});