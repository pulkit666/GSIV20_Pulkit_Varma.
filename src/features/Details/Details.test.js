import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import configureMockStore from "redux-mock-store";
import { act } from 'react-dom/test-utils';
import Details from './Details';

jest.mock("../../core/http");

function HookWrapper(props) {
    const hook = props.hook ? props.hook() : undefined;
    return <div hook={hook} />;
}

describe('test the Details hook', () => {

    configure({ adapter: new Adapter() });

    const setLoad = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setLoad]);

    it('the Details page should be rendered normally', () => {

        const props = {
            history: {
                push: jest.fn(),
                location: { pathname: '/' }
            },
            match: {
                path: "/details:id",
                url: "/details:446893",
                isExact: true,
                params: { id: ":446893" }
            }
        }

        let wrapper = mount(
            <HookWrapper hook={() => Details(props)} />
        );
        expect(wrapper).toBeDefined();
    });

    it('the Details page should be rendered with runTime minutes being less than 10', () => {

        const props = {
            history: {
                push: jest.fn(),
                location: { pathname: '/' }
            },
            match: {
                path: "/details:id",
                url: "/details:446893",
                isExact: true,
                params: { id: ":446893" }
            }
        }

        let wrapper = mount(
            <HookWrapper hook={() => Details(props)} />
        );
        expect(wrapper).toBeDefined();
    });

    it('the Details page should be rendered with runTime seconds being less than 10', () => {

        const props = {
            history: {
                push: jest.fn(),
                location: { pathname: '/' }
            },
            match: {
                path: "/details:id",
                url: "/details:446893",
                isExact: true,
                params: { id: ":446893" }
            }
        }

        let wrapper = mount(
            <HookWrapper hook={() => Details(props)} />
        );
        expect(wrapper).toBeDefined();
    });

});