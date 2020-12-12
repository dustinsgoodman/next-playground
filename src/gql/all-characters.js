import gql from 'graphql-tag';

const ALL_CHARACTERS = gql`
  query allCharacters {
    characters {
      results {
        id
        name
      }
    }
  }
`;

export default ALL_CHARACTERS;
