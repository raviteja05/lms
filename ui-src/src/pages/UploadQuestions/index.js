import React from 'react';

import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import reducers from '../../reducers';
import {NavBar,Footer} from '../../components/pages/common'

import UploadQuestionsForm from '../../components/pages/admin/UploadQuestionsForm'
import App from '../../App';

const components=[
    NavBar,UploadQuestionsForm,Footer

]


import('react-dom').then((ReactDOM)=>ReactDOM.render(
    <Provider store={createStore(reducers,applyMiddleware(thunk))}><App components={components}/></Provider>,
     document.getElementById('root')
   ));

