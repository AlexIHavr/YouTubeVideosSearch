import { connect } from 'react-redux';
import { clearResults } from '../../redux/youTubeVideos/actions';
import { loadYouTubeVideos } from '../../redux/youTubeVideos/thunks';
import Header from './header/Header';
import YouTubeVideos from './youTubeVideos/YouTubeVideos';

const App = ({ state, loadYouTubeVideos, clearResults }) => {
  return (
    <div className="wrapper">
      <Header state={state} loadYouTubeVideos={loadYouTubeVideos} clearResults={clearResults} />
      <YouTubeVideos state={state} />
    </div>
  );
};

const mapStateToProps = ({ youTubeVideos }) => ({ state: youTubeVideos });
const mapDispatchToProps = { loadYouTubeVideos, clearResults };

export default connect(mapStateToProps, mapDispatchToProps)(App);
