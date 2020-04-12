import React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

function HookWrapper(props) {
    const hook = props.hook ? props.hook() : undefined;
    return <div hook={hook} />;
}


describe('test the Thumbnail hook', () => {
    configure({ adapter: new Adapter() });

    it('the Header page should be rendered', () => {
        const historyMock = {
            push: jest.fn(),
            location: {
                pathname: ''
            }
        };
        const props = {
            history: historyMock
        }
        let wrapper = mount(
            <HookWrapper hook={() => Header(props)} />
        );
        let hook = wrapper.find("div").props();
        const homeImage = hook.hook.props.children;
        const className = (homeImage[0].props.className);
        expect(className).toEqual('heading');
        const image = homeImage[1].props.className;
        expect(image).toEqual('home-icon');
        homeImage[1].props.onClick();
        expect(historyMock.push).toHaveBeenCalled();
    })
});