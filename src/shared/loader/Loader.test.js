import React from 'react';
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loader from './Loader';

function HookWrapper(props) {
    const hook = props.hook ? props.hook() : undefined;
    return <div hook={hook} />;
}


describe('test the Loader hooks', () => {
    configure({ adapter: new Adapter() });
    it('the Loader page should be rendered', () => {
        let wrapper = shallow(<HookWrapper hook={() => Loader()} />);
        expect(wrapper).toBeDefined();
    })
});