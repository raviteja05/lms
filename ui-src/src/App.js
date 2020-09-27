import React from 'react';
import {NavBar,Footer} from './components/pages/common'
import UploadQuestionForm from './components/pages/admin/UploadQuestionsForm'
import CreateTestForm from './components/pages/admin/CreateTestForm'

import ExamForm from './components/pages/exam/ExamForm'

function App({components}) {
  console.log("components")
  return (
    <React.Fragment>
      {components.map(El=><El/>)}
      
    </React.Fragment>
  );
}

export default App;
