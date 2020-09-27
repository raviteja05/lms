import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Axios from "axios";
import qs from "qs";
class LoginForm extends React.Component {
  input(props) {
    console.log(props);
    return (
      <input
        type={props.type}
        className="form-control col-5 mb-4"
        name={props.input.name}
        onChange={props.input.onChange}
      />
    );
  }
  onsubmit(ev, data) {
    ev.preventDefault();
    Axios({
      method: "post",
      url: "/perform_login",
      data: qs.stringify({
        username: data.values.username,
        password: data.values.password,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }).then(window.location.replace("/exam"));
  }
  render() {
    var formData = this.props.formData;

    return (
      <React.Fragment>
        <form
          className="container border border-light p-5"
          action="/perform_login"
          method="POST"
        >
          <p className="h4 mb-4 ">Sign in</p>

          <Field type="text" name="username" component={this.input} />

          <Field type="password" name="password" component={this.input} />

          <div className="row">
            <div className="custom-control custom-checkbox col-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="defaultLoginFormRemember"
              />
              <label
                className="custom-control-label"
                htmlFor="defaultLoginFormRemember"
              >
                Remember me
              </label>
            </div>
            <div className="col-3">
              <a href="">Forgot password?</a>
            </div>
          </div>

          <button className="btn btn-info btn-block my-4 col-3" type="submit">
            Sign in
          </button>

          <p className="col-3">
            Not a member?
            <a href="/register">Register</a>
          </p>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { formData: state.formReducer.LoginForm };
};

export default reduxForm({
  form: "LoginForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // a unique identifier for this form
})(connect(mapStateToProps)(LoginForm));
