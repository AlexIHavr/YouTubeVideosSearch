import config from '../../config';
import { disablePreloader, enablePreloader } from './actions';
import { LOAD_YOUTUBE_VIDEOS } from './types';

export const loadYouTubeVideos = (searchQuery, maxResults) => async (dispatch) => {
  const URL = `https://www.googleapis.com/youtube/v3/search?key=${config.key}&part=snippet&maxResults=${maxResults}&q=${searchQuery}`;

  dispatch(enablePreloader());

  const data = await fetch(URL, {
    method: 'GET',
  });

  const results = await data.json();

  dispatch(disablePreloader());
  dispatch({ type: LOAD_YOUTUBE_VIDEOS, payload: results });
};
