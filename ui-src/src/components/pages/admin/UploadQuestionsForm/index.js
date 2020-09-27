import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addOptions } from "../../../../actions";
import axios from "axios";
class UploadQuestionsForm extends React.Component {
  input(props) {
    
    return     <input type="file"  onChange={props.onChange}/>
;
  }

  processForm(ev, props) {
    ev.preventDefault();
    var reader = new FileReader();



  reader.readAsText(props.formReducer.UploadQuestionsForm.values.questions[0]);
    axios.post("/import-questions", props.formReducer.UploadQuestionsForm.values.questions[0]);
    
  }

  render() {
    var options = [];
    return (
      <React.Fragment>
        <section className="jumbotron text">
          <div className="container">
          <form enctype='multipart/form-data'>
              
                
                
                  <Field name="questions" component="input" type="file" />
                 
              
              

              
              <button
                type="submit"
                onClick={(ev) => this.processForm(ev, this.props.appData)}
                className="btn btn-success mr-2"
              >
                Import Questions
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
  form: "UploadQuestionsForm"
   // a unique identifier for this form
})(connect(mapStateToProps, { addOptions })(UploadQuestionsForm));
