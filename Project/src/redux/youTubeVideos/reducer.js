import { CLEAR_RESULTS, STOP_LOADING, START_LOADING, ADD_RESULTS } from './types';

const initialState = {
  results: [],
  loading: false,
  pageToken: '',
};

const youTubeVideosReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case STOP_LOADING:
      return { ...state, loading: false };
    case ADD_RESULTS:
      return {
        ...state,
        results: [...state.results, ...action.payload.items],
        pageToken: action.payload.nextPageToken,
      };
    case CLEAR_RESULTS:
      return { ...state, results: [], pageToken: '' };
    default:
      return state;
  }
};

export default youTubeVideosReducer;
