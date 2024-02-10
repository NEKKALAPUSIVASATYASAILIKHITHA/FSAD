import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
//import Sixth from './project/sixth';
import Button from './project/button';
const root = ReactDOM.createRoot(document.getElementById('root'));
//import Small from './project/small';
root.render(
  <React.StrictMode>
    <>
    <Button/>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();