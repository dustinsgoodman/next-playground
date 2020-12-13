import React from 'react';
import UserResult from 'components/molecules/user-result';
import OrganizationResult from 'components/molecules/organization-result';

const Loading = () => <p>loading...</p>;
const Error = ({ error }) => <p>{error.message}</p>;

const UserSearch = ({
  results,
  totalCount,
  hasPrevPage,
  gotoPrevPage,
  hasNextPage,
  gotoNextPage,
  setSearchQuery,
  loading,
  error,
}) => {
  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <>
      <input type="text" placeholder="search field" />
      <h3>Results: {totalCount}</h3>
      <button>prev page</button>
      <button>next page</button>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {results.map((node) => {
        // eslint-disable-next-line no-underscore-dangle
        switch (node.__typename) {
          case 'User':
            return <UserResult key={node.login} {...node} />;
          case 'Organization':
            return <OrganizationResult key={node.login} {...node} />;
          default:
            console.warn('Cannot render this type of result');
            return null;
        }
      })}
    </>
  );
};

export default UserSearch;
