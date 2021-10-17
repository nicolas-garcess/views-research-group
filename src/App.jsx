import React from 'react';
import './App.css';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import ThunkMiddleware from 'redux-thunk';
import {
  ApolloClient, HttpLink, ApolloLink, InMemoryCache, from
} from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Navigation from './routes';
import reducers from './store';
import { getUser } from './helpers/user';
import { URL_PATH } from './api';

const httpLink = new HttpLink({ uri: URL_PATH.GRAPHQL_SERVER });
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      auth: getUser().token,
    }
  }));

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    authMiddleware,
    httpLink,
  ]),
});

const rootReducer = combineReducers(reducers);
const store = createStore(
  rootReducer,
  applyMiddleware(ThunkMiddleware),
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ApolloProvider client={client}>
          <Navigation />
        </ApolloProvider>
      </div>
    </Provider>
  );
}

export default App;
