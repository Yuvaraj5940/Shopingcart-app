import { createRoot } from 'react-dom/client';
import React, {
  useState, useEffect, useRef, memo, useMemo, useCallback,
} from 'react';
import App from './app.jsx';
import ErrorBoundary from './errorBoundary.jsx';
import './style.scss';
import { AuthProvider } from './context/authContext.jsx';
import { LoadingProvider } from './context/loadingContext.jsx';
import { ErrorProvider } from './context/errorContext.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ErrorBoundary>
    <LoadingProvider>
      <ErrorProvider>

        <AuthProvider>

          <App />
        </AuthProvider>
      </ErrorProvider>
    </LoadingProvider>

  </ErrorBoundary>,
);
