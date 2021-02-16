import ReactDOM from 'react-dom';
import VideoCard from '../components/VideoCard';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoCard />, div);
});
