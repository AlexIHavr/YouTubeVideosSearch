import { render, screen } from '@testing-library/react';
import { getResults } from '../../../redux/youTubeVideos/sagas';
import YouTubeVideo from './YouTubeVideo';

test('check youTube video', async () => {
  const results = await getResults({ maxResults: 5, searchQuery: 'cat' });
  const {
    id: videoId,
    snippet: { title, description },
  } = results.items[0];

  render(<YouTubeVideo videoId={videoId} title={title} description={description} />);

  expect(screen.getByTestId('iframe')).toBeInTheDocument();
});
