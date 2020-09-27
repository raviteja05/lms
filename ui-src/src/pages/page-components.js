import {NavBar,Footer} from '../components/pages/common'
import ExamForm from '../components/pages/exam/ExamForm'
import CreateQuestion from '../components/pages/admin/CreateQuestion'
import UploadQuestionsForm from '../components/pages/admin/UploadQuestionsForm'
import CreateTestForm from '../components/pages/admin/CreateTestForm'
import LoginForm from '../components/pages/login/LoginForm'
import RegisterForm from '../components/pages/login/RegisterForm'

export const pageComponents={
    exam:[NavBar,ExamForm,Footer],
    "create-exam":[NavBar,CreateTestForm,Footer],
    "create-question":[NavBar,CreateQuestion,Footer],
    "bulk-upload":[ NavBar,UploadQuestionsForm,Footer],
    register:[NavBar, RegisterForm, Footer],
    login:[NavBar, LoginForm, Footer]
}