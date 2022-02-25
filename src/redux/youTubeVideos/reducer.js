import { CLEAR_RESULTS, DISABLE_PRELOADER, ENABLE_PRELOADER, LOAD_YOUTUBE_VIDEOS } from './types';

const initialState = {
  results: [],
  loading: false,
};

const youTubeVideosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENABLE_PRELOADER:
      return { ...state, loading: true };
    case DISABLE_PRELOADER:
      return { ...state, loading: false };
    case LOAD_YOUTUBE_VIDEOS:
      return { ...state, results: [...state.results, ...action.payload] };
    case CLEAR_RESULTS:
      return { ...state, results: [] };
    default:
      return state;
  }
};

export default youTubeVideosReducer;
