import { createRoot } from 'react-dom/client';
import React, {
  useState, useEffect, useRef, memo, useMemo, useCallback,
} from 'react';
import App from './app.jsx';
import ErrorBoundary from './errorBoundary.jsx';
import './style.scss'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ErrorBoundary>
    <App />

  </ErrorBoundary>,
);
