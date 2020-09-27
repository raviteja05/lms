import React from "react";
import { connect } from "react-redux";
import {
  fetchTest,
  fetchCurrentQuestion,
  questionIndex,
  getResult,
} from "../../../actions";
import axios from "axios";
import { ExamSection, Result } from ".";

import { reduxForm } from "redux-form";

class ExamForm extends React.Component {
  componentDidMount() {
    var id = "4028b8817493b5280174945305580037";
    axios.get("/get-test?id=" + id).then((res) => {
      this.props.fetchTest(res);
      this.props.questionIndex(0);
      this.props.fetchCurrentQuestion(res.data.questions[0]);
    });
  }
  next(questions, fetchCurrentQuestion, questionIndex, index) {
    questionIndex(index + 1);
    fetchCurrentQuestion(questions[index + 1]);
  }
  previous(questions, fetchCurrentQuestion, questionIndex, index) {
    questionIndex(index - 1);
    fetchCurrentQuestion(questions[index - 1]);
  }
  render() {
    return (
      <React.Fragment>
        {!this.props.result && (
          <ExamSection
            {...this.props}
            result={this.props.getResult}
            handleNext={this.next}
            handlePrevious={this.previous}
          />
        )}
        {this.props.result && <Result result={this.props.result.data} />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.testData,
    ...state.currentQuestion,
    ...state.index,
    answers: state.formReducer.ExamForm,
    ...state.result,
  };
};

export default reduxForm({
  form: "ExamForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // a unique identifier for this form
})(
  connect(mapStateToProps, {
    getResult,
    fetchTest,
    fetchCurrentQuestion,
    questionIndex,
  })(ExamForm)
);
