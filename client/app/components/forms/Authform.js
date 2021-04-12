import React from "react";
import { Form, Field } from "react-final-form";
import { textInput, emailInput, passwordInput } from "./Inputs";
import Loader from "../loaders/FancyLoader";
import {
  required,
  minLength,
  composeValidators,
} from "../../helpers/Validators";

export default function AuthForm({
  onAuth,
  heading,
  buttonText,
  signUp,
  history,
  removeError,
}) {
  const onSubmit = (values) => {
    const authType = signUp ? "signup" : "signin";
    onAuth(authType, values)
      .then()
      .catch((err) => {
        return err;
      });
  };
  return (
    <div className="component-dark">
      <div className="container spacing-large">
        <Form
          onSubmit={onSubmit}
          render={({
            handleSubmit,
            invalid,
            form,
            pristine,
            submitting,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <h2>{heading}</h2>
              {submitting && <Loader />}
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                      id="email"
                      name="email"
                      component={emailInput}
                      validate={composeValidators(required, minLength(3))}
                    />
                  </div>
                </div>
                {signUp && (
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <Field
                        id="username"
                        name="username"
                        type="text"
                        component={textInput}
                        validate={composeValidators(required, minLength(3))}
                      />
                    </div>
                  </div>
                )}
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      component={passwordInput}
                      validate={composeValidators(required, minLength(3))}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={form.reset}
                    disabled={pristine || submitting}
                  >
                    Reset
                  </button>
                </div>
                <div className="col-6">
                  <button
                    className="btn btn-primary mr-3"
                    type="submit"
                    disabled={invalid || submitting}
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
}
