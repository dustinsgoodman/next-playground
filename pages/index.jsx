import React from 'react';
import { Helmet } from 'react-helmet';
import UserSearch from 'components/organisms/user-search';

const Home = () => (
  <>
    <Helmet
      title="Github User Search"
      meta={[{ property: 'og:title', content: 'Github User Search' }]}
    />

    <UserSearch />
  </>
);

export default Home;
