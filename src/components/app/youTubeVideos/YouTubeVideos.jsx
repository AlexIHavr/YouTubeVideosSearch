import Preloader from '../preloader/Preloader';
import YouTubeVideo from './YouTubeVideo';
import './youTubeVideos.scss';

const YouTubeVideos = ({ state: { results, loading } }) => {
  console.log(results);
  return (
    <div className="youTubeVideos">
      {loading ? (
        <Preloader />
      ) : (
        results.map(({ id: { videoId }, snippet: { title, description } }) => (
          <YouTubeVideo key={videoId} videoId={videoId} title={title} description={description} />
        ))
      )}
    </div>
  );
};

export default YouTubeVideos;
