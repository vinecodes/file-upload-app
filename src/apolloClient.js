import { ApolloClient, InMemoryCache } from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

const uploadLink = createUploadLink({
  uri: 'http://localhost:8000/graphql', // Your GraphQL endpoint
});

const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
});

export default client;
