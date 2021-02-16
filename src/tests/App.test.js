import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from '../views/App';


it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<App />, section);
});
