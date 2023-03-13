import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
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
const store = createStore(
  roodReduser,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__(),
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
