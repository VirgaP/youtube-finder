import ReactDOM from 'react-dom';
import VideoPreview from '../components/VideoPreview';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoPreview />, div);
});