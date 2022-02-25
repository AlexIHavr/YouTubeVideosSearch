import Preloader from '../preloader/Preloader';
import './youTubeVideos.scss';

const YouTubeVideos = ({ state: { results, loading } }) => {
  console.log(results);

  return (
    <div className="youTubeVideos">
      {loading ? (
        <Preloader />
      ) : (
        results.map(({ id: { videoId }, snippet: { title, description } }) => (
          <div key={videoId} className="row card">
            <div className="card-image">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="card-content">
              <span className="card-title">{title}</span>
              <p>{description}</p>
            </div>
            <div className="card-action">
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                Go to video
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default YouTubeVideos;
