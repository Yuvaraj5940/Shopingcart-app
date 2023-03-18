import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import React, {
  useState, useEffect, useRef, memo, useMemo, useCallback,
} from 'react';
import App from './app.jsx';
import ErrorBoundary from './errorBoundary.jsx';
import './style.scss';
import { AuthProvider } from './context/authContext.jsx';
import { LoadingProvider } from './context/loadingContext.jsx';
import { ErrorProvider } from './context/errorContext.jsx';
import roodReduser from './reduser';

const container = document.getElementById('root');
const root = createRoot(container);

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  roodReduser,
  composeEnhancers(applyMiddleware(thunk)),
);
root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <LoadingProvider>
        <ErrorProvider>

          <AuthProvider>

            <App />
          </AuthProvider>
        </ErrorProvider>
      </LoadingProvider>

    </ErrorBoundary>
  </Provider>,
);
