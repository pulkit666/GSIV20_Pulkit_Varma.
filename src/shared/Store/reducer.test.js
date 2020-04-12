import reducer from "./reducer";
import * as actionTypes from './types';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


describe('redux reducer', () => {
    configure({ adapter: new Adapter() });

    const initialState = {
        filterType: ''
    }

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should set the filter type and return the changed state', () => {

        const resultState = {
            filterType: 'all'
        }

        expect(reducer(initialState, {
            type: actionTypes.SET_FILTER_TYPE,
            payload: 'all'
        })).toEqual(resultState);

    });

});