import { call, put, takeLatest } from 'redux-saga/effects';
import { addResults, setPageToken, startLoading, stopLoading } from './actions';
import { GET_RESULTS } from './types';

export function* addResultsWatcher() {
  yield takeLatest(GET_RESULTS, addResultsWorker);
}

function* addResultsWorker(action) {
  yield put(startLoading());

  const payload = yield call(getResults, action.payload);

  yield put(setPageToken(payload.nextPageToken));
  yield put(addResults(payload.items));
  yield put(stopLoading());
}

export async function getResults({ maxResults, searchQuery, pageToken }) {
  let URL = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_KEY}&part=snippet&maxResults=${maxResults}&q=${searchQuery}`;

  if (pageToken) URL += `&pageToken=${pageToken}`;

  const data = await fetch(URL, {
    method: 'GET',
  });

  return await data.json();
}
