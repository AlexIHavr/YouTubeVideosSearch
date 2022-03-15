import { createAction } from 'redux-actions';
import { CLEAR_RESULTS, STOP_LOADING, START_LOADING, ADD_RESULTS, GET_RESULTS } from './types';

export const startLoading = createAction(START_LOADING);
export const stopLoading = createAction(STOP_LOADING);
export const addResults = createAction(ADD_RESULTS);
export const clearResults = createAction(CLEAR_RESULTS);

export const getResults = createAction(GET_RESULTS);
