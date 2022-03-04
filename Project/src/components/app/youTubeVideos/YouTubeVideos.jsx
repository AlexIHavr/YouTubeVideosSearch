import YouTubeVideo from 'youtubevideocomponent';
import Preloader from '../preloader/Preloader';
import './youTubeVideos.scss';

const YouTubeVideos = ({ state: { results, loading } }) => {
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
