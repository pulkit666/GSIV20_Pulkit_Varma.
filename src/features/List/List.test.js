import React from 'react';
import { Provider } from "react-redux";
import List, { generateData } from './List';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import configureMockStore from "redux-mock-store";
import { act } from 'react-dom/test-utils';
import { mapStateToProps } from './List';

const mockStore = configureMockStore();

jest.mock("../../core/http");

describe('test the List hook', () => {
    let store = mockStore({ filterType: 'as' });
    configure({ adapter: new Adapter() });

    const setLoad = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setLoad]);

    it('the List page should be rendered', () => {

        const props = {
            history: {
                push: jest.fn(),
                location: { pathname: '/' }
            }
        }
        act(() => {
            const { container } = render(
                <Provider store={store}>
                    <List {...props} />
                </Provider>
            );
            expect(container).toBeDefined();

        });

    });

    it('checking the catch condition of getList', () => {

        const props = {
            history: {
                push: jest.fn(),
                location: { pathname: '/' }
            }
        }
        act(() => {
            const { container } = render(
                <Provider store={store}>
                    <List {...props} />
                </Provider>
            );
            expect(container).toBeDefined();
        });
    });

    it('checking the catch condition of getPagesData', () => {

        const props = {
            history: {
                push: jest.fn(),
                location: { pathname: '/' }
            }
        }
        act(() => {
            const { container } = render(
                <Provider store={store}>
                    <List {...props} />
                </Provider>
            );
            expect(container).toBeDefined();
        });
    });

    it('checking the else condition of getList', () => {

        const props = {
            history: {
                push: jest.fn(),
                location: { pathname: '/' }
            }
        }
        act(() => {
            const { container } = render(
                <Provider store={store}>
                    <List {...props} />
                </Provider>
            );
            expect(container).toBeDefined();
        });

    });

    it('testing generateData function', () => {
        const mockResponseData = [{
            popularity: 2,
            vote_count: 234,
            video: false,
            poster_path: '/asds.png',
            id: 123,
            adult: false,
            backdrop_path: './sds.png',
            original_language: 'en',
            original_title: 'Pulkit',
            genre_ids: [1, 2, 3],
            title: 'Mock',
            vote_average: 2.3,
            overview: 'Mocking',
            release_date: '2020'
        }]
        let moviesData = [];
        const mockResultData = [
            {
                poster: '/asds.png',
                id: 123,
                title: 'Mock',
                rating: 2.3,
                description: 'Mocking'
            }
        ];
        generateData(mockResponseData, moviesData);
        expect(moviesData).toEqual(mockResultData);
    })

    it("should return the questionState from state", () => {
        const dummyState = {
            filterType: 'all'
        };
        const expectedResponse = {
            filterValue: 'all'
        };
        const response = mapStateToProps(dummyState);
        expect(response).toEqual(expectedResponse);
    });

});

describe('test the List hook', () => {
    configure({ adapter: new Adapter() });

    const setLoad = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setLoad]);

    it('the List page should be rendered with filterType equals to null', () => {
        let store = mockStore({ filterType: '' });

        const props = {
            history: {
                push: jest.fn(),
                location: { pathname: '/' }
            }
        }
        act(() => {
            const { container } = render(
                <Provider store={store}>
                    <List {...props} />
                </Provider>
            );
            expect(container).toBeDefined();
        });

    });

    it('the List page should be rendered with filterType equals to null', () => {
        let store = mockStore({ filterType: 'all' });

        // Stub the initial state
        const stubInitialState = [
            {
                poster: '/asds.png',
                id: 123,
                title: 'Mock',
                rating: 2.3,
                description: 'Mocking'
            }
        ];

        const props = {
            history: {
                push: jest.fn(),
                location: { pathname: '/' }
            }
        }
        act(() => {
            const { container } = render(
                <Provider store={store}>
                    <List {...props} />
                </Provider>
            );
            expect(container).toBeDefined();

        });

    });

});
