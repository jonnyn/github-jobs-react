import configureStore from 'redux-mock-store';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import filtersReducer, { INITIAL_STATE, setDescription, setLocation, setFullTime, setPage } from '../filtersSlice';

const middlewares = [...getDefaultMiddleware()];
const mockStore = configureStore(middlewares);

describe('Testing filters actions', () => {
    const store = mockStore(INITIAL_STATE);
    
    beforeEach(() => {
        store.clearActions();
      });

    it('should create an action to set description', () => {
        store.dispatch(setDescription('search keyword'));
        expect(store.getActions()).toMatchSnapshot();
    });

    it('should create an action to set location', () => {
        store.dispatch(setLocation('Vancouver'));
        expect(store.getActions()).toMatchSnapshot();
    });

    it('should create an action to set full_time', () => {
        store.dispatch(setFullTime(true));
        expect(store.getActions()).toMatchSnapshot();
    });

    it('should create an action to set page', () => {
        store.dispatch(setPage(2));
        expect(store.getActions()).toMatchSnapshot();
    });

});

describe('Testing filters reducers', () => {
    it('reduces correct states after setDescription action', () => {
        expect(filtersReducer(INITIAL_STATE, { type: 'filters/setDescription', payload: 'search keyword' })).toMatchSnapshot();
    });

    it('reduces correct states after setLocation action', () => {
        expect(filtersReducer(INITIAL_STATE, { type: 'filters/setLocation', payload: 'sf' })).toMatchSnapshot();
    });

    it('reduces correct states after setFullTime action', () => {
        expect(filtersReducer(INITIAL_STATE, { type: 'filters/setFullTime', payload: true })).toMatchSnapshot();
    });

    it('reduces correct states after setPage action', () => {
        expect(filtersReducer(INITIAL_STATE, { type: 'filters/setPage', payload: 3 })).toMatchSnapshot();
    });
});