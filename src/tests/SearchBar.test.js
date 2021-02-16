import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import SearchBar from '../components/SearchBar';

test('renders title', () => {
  render(<SearchBar />);
  const titleElement = screen.getByText(/Search for videos/i);
  expect(titleElement).toBeInTheDocument();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBar />, div);
});