import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addOptions } from "../../../../actions";
import axios from "axios";
class CreateTestForm extends React.Component {
  textarea(props) {
    return (
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        onChange={props.input.onChange}
        rows="3"
      ></textarea>
    );
  }
  input(props) {
    if (props.index === 0)
      return (
        <input
          type="text"
          className="form-control"
          onChange={props.input.onChange}
          value={props.description}
        />
      );
    return (
      <input
        type="text"
        className="form-control"
        onChange={props.input.onChange}
      />
    );
  }

  select(props) {
    if (props.index === 0)
      return (
        <div class="form-check">
          <input
            type="checkbox"
            onChange={props.input.onChange}
            className="form-check-input"
            
            checked={props.correctOption}
          />
          <label className="form-check-label">Is correct option</label>
        </div>
      );
    return (
      <div class="form-check">
        <input
          type="checkbox"
          onChange={props.input.onChange}
          className="form-check-input"
          checked={props.correctOption}
          
        />
        <label className="form-check-label">Is correct option</label>
      </div>
    );
  }
  processForm(ev, props) {
    ev.preventDefault();
    axios.post("/create-test", props.formReducer.CreateTestForm.values);
  }
  DropDownSelect(props) {
    return (
      <div className="form-group">
        <label for="exampleFormControlSelect1">Question Type</label>
        <select
          name="questionType"
          onSelect={props.input.onSelect}
          onChange={props.input.onChange}
          className="form-control"
          id="exampleFormControlSelect1"
          defaultValue="MCQ"
        >
          <option value="MCQ">Multiple Choice Question</option>
          <option value="LONGTEXT">Long Text</option>
          <option value="TEXT">Text</option>
          <option value="MULTI_SELECT">Multi Select</option>
          <option value="MATCH_THE_ANSWERS">Match the Answers</option>
          <option value="DRAG_AND_DROP_BLANK">Drag and Drop Blank</option>
          <option value="DRAG_AND_DROP_MATCH">Drag and Drop Match</option>
        </select>
      </div>
    );
  }
  
  render() {
    var options = [];
    return (
      <React.Fragment>
        <section className="jumbotron text">
          <div className="container">
            <form>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">
                  Test Name
                </label>
                <Field name="name" component={this.input} />
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">
                  Number of Questions
                </label>
                <Field name="noOfQuestions" component={this.input} />
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">
                  Topic
                </label>
                <Field name="topic" component={this.input} />
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">
                  Sub Topic
                </label>
                <Field name="subTopic" component={this.input} />
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">
                  Duration in Minutes
                </label>
                <Field name="durationInMinutes" component={this.input} />
              </div>
              
             
              <br />
              <button
                type="reset"
                
                className="btn btn-secondary mr-2"
              >
                Reset
              </button>
              <button
                type="submit"
                onClick={(ev) => this.processForm(ev, this.props.appData)}
                className="btn btn-success mr-2"
              >
                Create Test
              </button>
            </form>
            
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appData: state,
    form: state.formReducer.CreateTestForm,
    
  };
};

export default reduxForm({
  form: "CreateTestForm"
})(connect(mapStateToProps, { addOptions })(CreateTestForm));
