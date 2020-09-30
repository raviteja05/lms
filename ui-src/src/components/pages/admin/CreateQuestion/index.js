import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addOptions } from "../../../../actions";
import '../../../../vendor/custom.css'
class CreateQuestionForm extends React.Component {
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
  addOptions(options, props) {
    if (props.form.values.options) {
      options.push(...props.form.values.options);
      options.push({ description: "", correctOption: false });
      props.addOptions(options);
    } else {
      options.push(...props.form.values.options);
      props.addOptions(options);
    }
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
                  Question description
                </label>
                <Field name="description" component={this.textarea} />
              </div>
              <Field name="questionType" component={this.DropDownSelect} />
              {Object.keys(this.props.options).length !== 0 ? (
                this.props.options.options.map((el, index) => (
                  <div>
                    <div className="form-group">
                      <label for="exampleFormControlInput1">
                        Option {index}
                      </label>
                      <Field
                        name={`options[${index}].description`}
                        component={this.input}
                        index={index}
                        description={el.description}
                      />
                    </div>

                    <div className="form-group">
                      <Field
                        name={`options[${index}].correctOption`}
                        component={this.select}
                        index={index}
                        correctOption={el.correctOption}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <div className="form-group">
                    <label for="exampleFormControlInput1">Option 0</label>
                    <Field
                      name={`options[0].description`}
                      component={this.input}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      name={`options[0].correctOption`}
                      component={this.select}
                    />
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={(ev) => {
                  this.addOptions(options, this.props);
                }}
                className="btn btn-primary my-3 valign-center"
              >
                <i className="text-light material-icons">add_circle_outline</i>
                <span>Add Option</span>
              </button>

              <br />
              <button type="reset" className="btn btn-secondary mr-2">
                Reset
              </button>
              <button
                type="submit"
                onClick={(ev) => this.processForm(ev, this.props.appData)}
                className="btn btn-success mr-2"
              >
                Create Question
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
    form: state.formReducer.CreateQuestionForm,
    options: state.options,
  };
};

export default reduxForm({
  form: "CreateQuestionForm",
  initialValues: {
    questionType: "MCQ",
  }, // a unique identifier for this form
})(connect(mapStateToProps, { addOptions })(CreateQuestionForm));
