import React, { useCallback, useEffect, useState } from 'react';
import './header.scss';

const Header = ({ state: { loading, pageToken }, getResults, clearResults }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loading && searchQuery) {
      clearResults();
      getResults({ searchQuery, maxResults: 5 });
    }
  };

  const addResultsOnScroll = useCallback(() => {
    const documentElement = document.documentElement;
    if (
      documentElement.scrollTop + documentElement.clientHeight > documentElement.scrollHeight &&
      searchQuery
    ) {
      getResults({ searchQuery, maxResults: 5, pageToken });
    }
  }, [searchQuery, pageToken]);

  useEffect(() => {
    window.addEventListener('scroll', addResultsOnScroll);
    return () => {
      window.removeEventListener('scroll', addResultsOnScroll);
    };
  }, [addResultsOnScroll]);

  return (
    <header>
      <div className="row card">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="input-field col s12">
            <button type="submit" className="searchVideos btn waves-effect waves-light">
              <i className="material-icons prefix">search</i>
            </button>
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
