import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import USER_SEARCH_QUERY from 'gql/user-search-query';
import UserSearch from './user-search.view';

const UserSearchController = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [paginate, setPaginate] = useState({ first: 30 });

  const variables = {
    query: searchQuery,
    ...paginate,
  };

  const { data, loading, error } = useQuery(USER_SEARCH_QUERY, {
    variables,
    skip: !searchQuery,
    fetchPolicy: 'no-cache',
  });

  const { nodes, pageInfo = {}, userCount } = data?.search ?? {};
  const remappedResults = nodes?.map((node) => {
    // eslint-disable-next-line no-underscore-dangle
    switch (node.__typename) {
      case 'User':
        return {
          ...node,
          followersCount: node?.followers?.totalCount,
          followingCount: node?.following?.totalCount,
          starredRepositoriesCount: node?.starredRepositories?.totalCount,
        };
      case 'Organization':
      default:
        return node;
    }
  });

  const { hasPreviousPage, hasNextPage, startCursor, endCursor } = pageInfo;
  const gotoNextPage = () => {
    if (!hasNextPage) return;
    setPaginate({
      first: 30,
      after: endCursor,
    });
  };

  const gotoPrevPage = () => {
    if (!hasPreviousPage) return;
    setPaginate({
      last: 30,
      before: startCursor,
    });
  };

  return (
    <UserSearch
      results={remappedResults}
      totalCount={userCount}
      hasPrevPage={pageInfo.hasPreviousPage}
      gotoPrevPage={gotoPrevPage}
      hasNextPage={pageInfo.hasNextPage}
      gotoNextPage={gotoNextPage}
      setSearchQuery={(newQuery) => {
        setPaginate({ first: 30 });
        setSearchQuery(newQuery);
      }}
      loading={loading}
      error={error}
    />
  );
};

export default UserSearchController;
