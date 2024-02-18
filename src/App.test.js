import { render, screen } from '@testing-library/react';
import Highlights from './comp/Highlights';
import Card from './comp/Card';
import ConfirmedBooking from './comp/ConfirmedBooking';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import Main from './comp/Main';
import Booking from './Booking';
import Confirmed from './Confirmed'

test('renders highlights component', () => {
  render(<Highlights />);
  // Assert that the component renders without errors
  const highlightsElement = screen.getByText(/This Week specials!/i);
  expect(highlightsElement).toBeInTheDocument();
});

test('renders card component', () => {
  render(<Card />);
  // Assert that the component renders without errors
  const cardElement = screen.getByText(/Order delivery/i);
  expect(cardElement).toBeInTheDocument();
});

test('renders confirmed booking component', () => { 
  render(<ConfirmedBooking />);
  // Assert that the component renders without errors
  const confirmedBookingElement = screen.getByText(/Booking has been/i);
  expect(confirmedBookingElement).toBeInTheDocument();
});

test('renders main component', () => {
  render(<BrowserRouter><Main /></BrowserRouter>);
  // Assert that the component renders without errors
  const mainElement = screen.getByText(/Reserve a Table/i);
  expect(mainElement).toBeInTheDocument();
});

test('renders app component', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  // Assert that the component renders without errors
  const appElement = screen.getByText(/This Week specials!/i);
  expect(appElement).toBeInTheDocument();
});

test('renders booking component', () => {
  render(<BrowserRouter><Booking /></BrowserRouter>);
  // Assert that the component renders without errors
  const bookingElement = screen.getByText(/Choose Date/i);
  expect(bookingElement).toBeInTheDocument();
});

test('renders confirmed component', () => {
  render(<BrowserRouter><Confirmed /></BrowserRouter>);
  // Assert that the component renders without errors
  const confirmedElement = screen.getByText(/Booking has been/i);
  expect(confirmedElement).toBeInTheDocument();
});