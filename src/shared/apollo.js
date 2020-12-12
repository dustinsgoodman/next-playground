import { useMemo } from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

let cachedClient;

const createApolloClient = () =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'https://rickandmortyapi.com/graphql', // 'https://api.github.com/graphql',
      credentials: 'same-origin',
      fetch,
    }),
    cache: new InMemoryCache(),
  });

const initializeApollo = (initialState = null) => {
  const client = cachedClient ?? createApolloClient();

  // hydrate initial state for Next.js data fetching methods
  if (initialState) {
    const existingCache = client.extract();
    client.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === 'undefined') {
    return client;
  }

  // cache the apollo client once we're on the client since we can reuse it and don't
  // want to create a new one on each request
  if (!cachedClient) {
    cachedClient = client;
  }

  return client;
};

const useApollo = (initialState) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};

export default useApollo;
