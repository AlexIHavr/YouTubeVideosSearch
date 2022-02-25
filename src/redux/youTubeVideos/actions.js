import { CLEAR_RESULTS, DISABLE_PRELOADER, ENABLE_PRELOADER } from './types';

export const enablePreloader = (payload) => ({ type: ENABLE_PRELOADER, payload });
export const disablePreloader = (payload) => ({ type: DISABLE_PRELOADER, payload });
export const clearResults = (payload) => ({ type: CLEAR_RESULTS, payload });
