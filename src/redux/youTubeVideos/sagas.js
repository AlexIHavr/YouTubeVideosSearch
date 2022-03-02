import { call, put, takeEvery } from 'redux-saga/effects';
import { addResults, startLoading, stopLoading } from './actions';
import { GET_RESULTS } from './types';

export function* addResultsWatcher() {
  yield takeEvery(GET_RESULTS, addResultsWorker);
}

function* addResultsWorker(action) {
  yield put(startLoading());

  const payload = yield call(getResults, action.payload);

  yield put(addResults(payload));
  yield put(stopLoading());
}

async function getResults({ maxResults, searchQuery }) {
  const KEY = 'AIzaSyBu8S-Gea5P5HZ3lsccak8p1BU3JUdxSuc';
  const URL = `https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&maxResults=${maxResults}&q=${searchQuery}`;

  const data = await fetch(URL, {
    method: 'GET',
  });

  const results = await data.json();

  return results.items;
}
