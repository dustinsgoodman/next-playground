import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { render } from 'unit-test-utils';
import Characters from './index';

jest.mock('@apollo/react-hooks');

test('renders error state', () => {
  useQuery.mockReturnValueOnce({ error: true, loading: false, data: null });
  const { getByText } = render(<Characters />);
  expect(getByText('Error')).toBeInTheDocument();
});

test('renders loading state', () => {
  useQuery.mockReturnValueOnce({ error: false, loading: true, data: null });
  const { getByText } = render(<Characters />);
  expect(getByText('Loading...')).toBeInTheDocument();
});

test('renders characters list', () => {
  useQuery.mockReturnValueOnce({
    error: false,
    loading: false,
    data: {
      characters: {
        results: [
          { id: 'rick', name: 'Rick' },
          { id: 'morty', name: 'Morty' },
        ],
      },
    },
  });
  const { getByText } = render(<Characters />);
  expect(getByText('All Characters')).toBeInTheDocument();
  expect(getByText('Rick')).toBeInTheDocument();
  expect(getByText('Morty')).toBeInTheDocument();
});

test('renders empty list if malformed data', () => {
  useQuery.mockReturnValueOnce({
    error: false,
    loading: false,
    data: {
      characters: {},
    },
  });
  const { getByText } = render(<Characters />);
  expect(getByText('All Characters')).toBeInTheDocument();
  expect(() => getByText('Rick')).toThrow();
});
