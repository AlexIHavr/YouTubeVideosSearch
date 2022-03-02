import { stopLoading, startLoading } from './actions';
import { ADD_RESULTS } from './types';

export const addResults = (searchQuery, maxResults) => async (dispatch) => {
  const KEY = 'AIzaSyBu8S-Gea5P5HZ3lsccak8p1BU3JUdxSuc';
  const URL = `https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&maxResults=${maxResults}&q=${searchQuery}`;

  dispatch(startLoading());

  const data = await fetch(URL, {
    method: 'GET',
  });

  const results = await data.json();

  dispatch(stopLoading());
  dispatch({ type: ADD_RESULTS, payload: results.items });
};
