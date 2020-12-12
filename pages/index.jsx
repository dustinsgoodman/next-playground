import React from 'react';
import { Helmet } from 'react-helmet';
import HelloWorld from 'components/atoms/hello-world';

const Home = () => (
  <>
    <Helmet
      title="Hello there"
      meta={[{ property: 'og:title', content: 'Hello there' }]}
    />

    <HelloWorld />
  </>
);

export default Home;
