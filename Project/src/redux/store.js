import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import youTubeVideosReducer from './youTubeVideos/reducer';
import createSagaMiddleware from 'redux-saga';
import { addResultsWatcher } from './youTubeVideos/sagas';

const saga = createSagaMiddleware();

const rootReducer = combineReducers({ youTubeVideos: youTubeVideosReducer });

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(addResultsWatcher);

export default store;
