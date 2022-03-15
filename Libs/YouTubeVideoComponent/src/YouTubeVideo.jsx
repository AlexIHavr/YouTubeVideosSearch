import React from 'react';

const YouTubeVideo = ({ videoId, title, description }) => (
  <div className="row card">
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
      <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer">
        Go to video
      </a>
    </div>
  </div>
);

export default YouTubeVideo;
