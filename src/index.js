import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
  const consoleError = console.error;
  console.error = (...args) => {
      if (/Warning: YAxis: Support for defaultProps/.test(args[0])) {
          return; // Skip the specific warning
      }
      consoleError.apply(console, args);
  };
}


