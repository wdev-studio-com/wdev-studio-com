import Loadable from 'react-loadable';

const LoadableYouTube = Loadable({
  loader: () => import('./YoutubeVideo'),
  loading() {
    return <div>Loading...</div>
  }
});
export default LoadableYouTube