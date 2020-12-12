# NextJS Playground

This is an app where I experiment with NextJS features and try out new tech in my stack.

## Getting Started

1. Clone the repo
2. Run `yarn` to install deps
3. Run `yarn dev` to start the dev server
4. Navigate to `localhost:3000` in your browser to see the functioning app

## Guiding Principles
This is a React application using Next.JS.

Components are built trying to follow [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles. This is encouraged through the use of [Styled-Components](https://styled-components.com/).

Unit testing is required and browser testing is highly encouraged. Jest is used as the testing framework.

Apollo Client for GraphQL is the primary client for API interaction. The react hooks provided by the client are the preferred mode of integration.

## Storybook
```
yarn storybook
```

Should open a new browser window pointed at `localhost6006`.

## Testing
Project should always maintain 100% coverage.

```
# To run all tests:
yarn test

# To run only unit tests:
yarn test:unit

# To run only browser tests:
yarn test:browser
```
