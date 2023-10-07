import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './Hello';
import Counter from './Counter';
import HelloAsClass from './HelloAsClass';
import HelloAsFunction from './HelloAsFunction';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
    {/* <Hello></Hello>
    <Counter/>
    <HelloAsClass who="James"phone="05161646749" />
    <br/><HelloAsFunction a="5" b="10"/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
