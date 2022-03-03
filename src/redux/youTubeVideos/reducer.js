import {
  CLEAR_RESULTS,
  STOP_LOADING,
  START_LOADING,
  ADD_RESULTS,
  SET_PAGE_TOKEN,
  CLEAR_PAGE_TOKEN,
} from './types';

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
      return { ...state, results: [...state.results, ...action.payload] };
    case CLEAR_RESULTS:
      return { ...state, results: [], pageToken: '' };
    case SET_PAGE_TOKEN:
      return { ...state, pageToken: action.payload };
    default:
      return state;
  }
};

export default youTubeVideosReducer;
