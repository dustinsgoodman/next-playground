import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import USER_SEARCH_QUERY from 'gql/user-search-query';
import UserSearch from './user-search.view';

const UserSearchController = () => {
  const [searchQuery, setSearchQuery] = useState('example');
  const [cursor, setCusor] = useState({ next: null, prev: null });

  const variables = {
    query: searchQuery,
    first: 30,
  };

  if (cursor.next) {
    variables.after = cursor.next;
  } else if (cursor.prev) {
    variables.before = cursor.prev;
  }

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
    setCusor({
      next: endCursor,
      prev: null,
    });
  };

  const gotoPrevPage = () => {
    if (!hasPreviousPage) return;
    setCusor({
      next: null,
      prev: startCursor,
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
      setSearchQuery={setSearchQuery}
      loading={loading}
      error={error}
    />
  );
};

export default UserSearchController;
