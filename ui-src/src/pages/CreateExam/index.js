import React from 'react';

import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import reducers from '../../reducers';
import {NavBar,Footer} from '../../components/pages/common'

import CreateTestForm from '../../components/pages/admin/CreateTestForm'
import App from '../../App';

const components=[
    NavBar,CreateTestForm,Footer

]


import('react-dom').then((ReactDOM)=>ReactDOM.render(
    <Provider store={createStore(reducers,applyMiddleware(thunk))}><App components={components}/></Provider>,
     document.getElementById('root')
   ));

