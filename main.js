import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom'
import './node_modules/bootstrap-css-only/css/bootstrap.min.css';

ReactDOM.render(
<Provider store = {store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>,
document.getElementById('app'));