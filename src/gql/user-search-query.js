import gql from 'graphql-tag';

const USER_SEARCH_QUERY = gql`
  query UserSearchQuery(
    $query: String!
    $first: Int
    $last: Int
    $before: String
    $after: String
  ) {
    search(
      query: $query
      type: USER
      first: $first
      last: $last
      before: $before
      after: $after
    ) {
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
