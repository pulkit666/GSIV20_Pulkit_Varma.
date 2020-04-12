import React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cards from './Cards';

function HookWrapper(props) {
    const hook = props.hook ? props.hook() : undefined;
    return <div hook={hook} />;
}


describe('test the Thumbnail hook', () => {
    configure({ adapter: new Adapter() });

    it('the Cards page should be rendered', () => {
        const historyMock = {
            push: jest.fn(),
        };
        const props = {
            history: historyMock,
            data: {
                poster: "/4po8h4M4buPbFhrOxkYylvWXtkh.jpg",
                id: 536142,
                title: "Pura Vida",
                rating: 0,
                description: "Four flawed friends travel to tropics where things go wrong."
            }
        }
        let wrapper = mount(
            <HookWrapper hook={() => Cards(props)} />
        );
        let hook = wrapper.find("div").props();
        const cardsChildren = hook.hook.props.children;
        const pathPassed = (cardsChildren[0].props.path);
        expect(pathPassed).toEqual('/4po8h4M4buPbFhrOxkYylvWXtkh.jpg');
        const cardText = cardsChildren[1].props.className;
        expect(cardText).toEqual('card__text');
        const cardTextChildrens = cardsChildren[1].props.children;
        expect(cardTextChildrens[0].props.children).toEqual('Pura Vida');
        expect(cardTextChildrens[1].props.children[0]).toEqual("(", 0, ")");
        expect(cardTextChildrens[2].props.children).toEqual('Four flawed friends travel to tropics where things go wrong.')
        hook.hook.props.onClick();
        expect(historyMock.push).toHaveBeenCalled();
        expect(historyMock.push).toHaveBeenCalledWith('/details:536142');
    })
});