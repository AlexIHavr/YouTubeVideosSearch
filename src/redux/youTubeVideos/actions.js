import { CLEAR_RESULTS, STOP_LOADING, START_LOADING, ADD_RESULTS, GET_RESULTS } from './types';

export const startLoading = (payload) => ({ type: START_LOADING, payload });
export const stopLoading = (payload) => ({ type: STOP_LOADING, payload });
export const addResults = (payload) => ({ type: ADD_RESULTS, payload });
export const clearResults = (payload) => ({ type: CLEAR_RESULTS, payload });

export const getResults = (payload) => ({ type: GET_RESULTS, payload });
