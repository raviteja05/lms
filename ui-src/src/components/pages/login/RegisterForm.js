import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
class RegisterForm extends React.Component {
  input(props) {
    return (
      <input
        type={props.type}
        className="form-control col-5 mb-4"
        name={props.input.name}
        onChange={props.input.onChange}
      />
    );
  }
  onSubmit(ev, props) {
    ev.preventDefault();
    console.log(props.values);
    axios.post("/register", props.values);
  }

  render() {
    
    return (
      <React.Fragment>
        <form class="container form-horizontal" action="/login" method="POST">
          <fieldset>
            <div id="legend">
              <legend class="">Register</legend>
            </div>
            <div class="control-group">
              <label class="control-label" for="username">
                User Id
              </label>
              <div class="controls">
                <Field type="text" name="id" component={this.input} />
              </div>
            </div>

            <div class="control-group">
              <label class="control-label" for="username">
                Name
              </label>
              <div class="controls">
                <Field type="text" name="name" component={this.input} />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label" for="email">
                User Type
              </label>
              <div class="controls">
                <Field type="text" name="userType" component={this.input} />
              </div>
            </div>

            <div class="control-group">
              <label class="control-label" for="password">
                Password
              </label>
              <div class="controls">
                <Field type="password" name="password" component={this.input} />
              </div>
            </div>

            <div class="control-group mt-2">
              <div class="controls">
                <button
                  class="btn btn-info btn-block my-4 col-3"
                  onClick={(ev) => this.onSubmit(ev, this.props.formData)}
                >
                  Register
                </button>
         
              </div>
            </div>
          </fieldset>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { formData: state.formReducer.RegisterForm };
};

export default reduxForm({
  form: "RegisterForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // a unique identifier for this form
})(connect(mapStateToProps)(RegisterForm));
