import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DataAPI from"./HTTP Request/data";
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import logger from "./services/logservices";
import 'bootstrap/dist/js/bootstrap';
logger.init();
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
