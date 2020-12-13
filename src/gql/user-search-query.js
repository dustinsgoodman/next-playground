import gql from 'graphql-tag';

const USER_SEARCH_QUERY = gql`
  query UserSearchQuery($query: String!, $first: Int!) {
    search(query: $query, type: USER, first: $first) {
      userCount
      nodes {
        ... on Organization {
          avatarUrl
          description
          email
          location
          login
          name
          url
        }
        ... on User {
          avatarUrl
          email
          followers {
            totalCount
          }
          following {
            totalCount
          }
          location
          login
          name
          starredRepositories {
            totalCount
          }
          url
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;

export default USER_SEARCH_QUERY;
