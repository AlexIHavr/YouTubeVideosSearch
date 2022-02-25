import React, { useEffect, useState } from 'react';
import './header.scss';

const Header = ({ state: { loading }, loadYouTubeVideos, clearResults }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const loadingYouTubeVideos = (e) => {
    e.preventDefault();

    if (!loading) {
      clearResults();
      loadYouTubeVideos(searchQuery, 5);
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      const documentElement = document.documentElement;
      if (documentElement.scrollTop + documentElement.clientHeight > documentElement.scrollHeight) {
        loadYouTubeVideos(searchQuery, 5);
      }
    };
  }, [searchQuery]);

  return (
    <header>
      <div className="row card">
        <form className="col s12" onSubmit={loadingYouTubeVideos}>
          <div className="input-field col s12">
            <i className="material-icons prefix">search</i>
            <input
              placeholder="Write searching videos"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value.trim())}
            />
          </div>
        </form>
      </div>
    </header>
  );
};

export default React.memo(Header);
