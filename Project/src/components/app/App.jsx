import { connect } from 'react-redux';
import { clearResults, getResults } from '../../redux/youTubeVideos/actions';
import Header from './header/Header';
import YouTubeVideos from './youTubeVideos/YouTubeVideos';

const App = ({ state, getResults, clearResults }) => {
  return (
    <div className="wrapper">
      <Header state={state} getResults={getResults} clearResults={clearResults} />
      <YouTubeVideos state={state} />
    </div>
  );
};

const mapStateToProps = ({ youTubeVideos }) => ({ state: youTubeVideos });
const mapDispatchToProps = { getResults, clearResults };

export default connect(mapStateToProps, mapDispatchToProps)(App);
