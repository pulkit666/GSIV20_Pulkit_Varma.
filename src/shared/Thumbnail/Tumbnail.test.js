import React from 'react';
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Thumbnail from './Thumbnail';

function HookWrapper(props) {
    const hook = props.hook ? props.hook() : undefined;
    return <div hook={hook} />;
}


describe('test the Thumbnail hook', () => {
    configure({ adapter: new Adapter() });

    it('the Thumbnail page should be rendered', () => {
        const props = {
            path: '/7W0G3YECgDAfnuiHG91r8WqgIOe.jpg'
        }
        let wrapper = shallow(<HookWrapper hook={() => Thumbnail(props)} />);
        expect(wrapper).toBeDefined();
    })
});