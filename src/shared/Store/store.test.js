import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import store from './store';

const mockStore = configureMockStore();


describe('redux store', () => {
    configure({ adapter: new Adapter() });


    it("should set the supplied initial state", () => {
        const initialState = {
            filterType: ''
        };

        const store = mockStore(initialState);
        expect(store.getState()).toEqual({
            filterType: ''
        });
    });

});