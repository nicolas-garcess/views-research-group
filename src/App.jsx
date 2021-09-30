import React from 'react';
import './App.css';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import ThunkMiddleware from 'redux-thunk';
import Navigation from './routes';
import reducers from './store';

const rootReducer = combineReducers(reducers);
const store = createStore(
  rootReducer,
  applyMiddleware(ThunkMiddleware),
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigation />
      </Provider>
    </div>
  );
}

export default App;
