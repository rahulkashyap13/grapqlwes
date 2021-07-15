import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "authorization": token ? `${token}` : "",
      "clientid":"3r0j8jrqk8gbpc5kobme7dhs7m",
      "domain":"wesoar.wesoar.ai",
      "accept-version":"2.0.09"
    }
  }
});
const httpLink = createHttpLink({
  uri: 'https://app.wesoar.ai/graphql',
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // uri: 'https://app.wesoar.ai/graphql',
  cache: new InMemoryCache()
});
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
