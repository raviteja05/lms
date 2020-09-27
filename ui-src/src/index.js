import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers';

import {NavBar,Footer} from './components/pages/common'

import ExamForm from './components/pages/exam/ExamForm'


const components=[
    NavBar,ExamForm,Footer

]


ReactDOM.render(
  <Provider store={createStore(reducers,applyMiddleware(thunk))}><App components={components}/></Provider>,
  document.getElementById('root')
);