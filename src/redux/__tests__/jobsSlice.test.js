import configureStore from 'redux-mock-store';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import axios from 'axios';
import jobsReducer, { INITIAL_STATE, fetchJobs, fetchJobById } from '../jobsSlice';

const middlewares = [...getDefaultMiddleware()];
const mockStore = configureStore(middlewares);
jest.mock('axios');

describe('Testing jobs async actions - thunks', () => {
    const store = mockStore(INITIAL_STATE);
    
    beforeEach(() => {
        store.clearActions();
      });

    it('calls fetchJobs and expects series of actions, including ', async () => {
        const response = {
            data: [],
            status: 200,
            statusText: "OK"
        }
        const filterObj = { description: 'ES6', location: 'Toronto', fullTime: true, page: 2 };
        const expectedActions = [
            {
                type: 'jobs/fetchJobsStatus/pending'
            },
            {
                payload: 'ES6',
                type: 'filters/setDescription',
            },
            {
                payload: 'Toronto',
                type: 'filters/setLocation',
            },
            {
                payload: true,
                type: 'filters/setFullTime'
            },
            {
                payload: 2,
                type: 'filters/setPage'
            },
            {
                type: 'jobs/fetchJobsStatus/fulfilled'
            }
          ];

          axios.mockImplementationOnce(() => Promise.resolve(response));

          return store.dispatch(fetchJobs(filterObj)).then(() => {
            expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
            expect(store.getActions()[1]).toEqual(expectedActions[1]);
            expect(store.getActions()[2]).toEqual(expectedActions[2]);
            expect(store.getActions()[3]).toEqual(expectedActions[3]);
            expect(store.getActions()[4]).toEqual(expectedActions[4]);
            expect(store.getActions()[5].type).toEqual(expectedActions[5].type);
          });
    });

    it('calls fetchJobs and expects series of actions, including ', async () => {
        const response = {
            data: {},
            status: 200,
            statusText: "OK"
        }
        const expectedActions = [
            {
                type: 'jobs/fetchJobByIdStatus/pending'
            },
            {
                type: 'jobs/fetchJobByIdStatus/fulfilled'
            }
          ];

          axios.mockImplementationOnce(() => Promise.resolve(response));

          return store.dispatch(fetchJobById('60dad2c2-6090-4fb7-9e46-8a924d2ee9de')).then(() => {
            expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
            expect(store.getActions()[1].type).toEqual(expectedActions[1].type);
          });
    });

});

describe('Testing filters reducers', () => {
    it('reduces correct states after fetchJobs action', () => {
        expect(jobsReducer(INITIAL_STATE, { type: 'jobs/fetchJobsStatus/fulfilled', payload: [] })).toMatchSnapshot();
    });

    it('reduces correct states after fetchJobById action', () => {
        expect(jobsReducer(INITIAL_STATE, { type: 'jobs/fetchJobByIdStatus/fulfilled', payload: {} })).toMatchSnapshot();
    });
});