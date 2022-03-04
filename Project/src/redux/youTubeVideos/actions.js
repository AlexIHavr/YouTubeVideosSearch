import { createAction } from 'redux-actions';
import {
  CLEAR_RESULTS,
  STOP_LOADING,
  START_LOADING,
  ADD_RESULTS,
  GET_RESULTS,
  SET_PAGE_TOKEN,
} from './types';

export const startLoading = createAction(START_LOADING);
export const stopLoading = createAction(STOP_LOADING);
export const addResults = createAction(ADD_RESULTS);
export const clearResults = createAction(CLEAR_RESULTS);
export const setPageToken = createAction(SET_PAGE_TOKEN);

export const getResults = createAction(GET_RESULTS);
