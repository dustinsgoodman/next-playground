import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import ALL_CHARACTERS from 'gql/all-characters';
import Characters from './characters.view';

const CharactersController = () => {
  const { loading, error, data } = useQuery(ALL_CHARACTERS);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  const characters = data?.characters?.results ?? [];
  return <Characters characters={characters} />;
};

export default CharactersController;
