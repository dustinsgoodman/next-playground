import React from 'react';
import { useForm } from 'react-hook-form';

import Loading from 'components/atoms/loading';
import Error from 'components/atoms/error';
import UserResult from 'components/molecules/user-result';
import OrganizationResult from 'components/molecules/organization-result';

import {
  UserSearchContainer,
  FormContainer,
  FormErrorContainer,
} from './user-search.styles';

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
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = ({ searchUsers }) => setSearchQuery(searchUsers);

  return (
    <UserSearchContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <input
            type="text"
            placeholder="search field"
            name="searchUsers"
            defaultValue={null}
            ref={register({ required: true })}
          />

          <input type="submit" />
        </FormContainer>

        {errors.searchUsers && (
          <FormErrorContainer>Must provide a search string</FormErrorContainer>
        )}
      </form>

      <h3>Results: {totalCount}</h3>
      {hasPrevPage && (
        <button type="button" onClick={gotoPrevPage}>
          Previous
        </button>
      )}
      {hasNextPage && (
        <button type="button" onClick={gotoNextPage}>
          Next
        </button>
      )}
      {loading && <Loading />}
      {error && <Error error={error} />}
      {!loading &&
        !error &&
        results?.map((node) => {
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
    </UserSearchContainer>
  );
};

export default UserSearch;
