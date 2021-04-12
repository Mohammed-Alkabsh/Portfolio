import React, { Fragment, useEffect, useState } from "react";

export const textInput = ({ input, meta, config, ...rest }) => (
  <Fragment>
    <input
      className="form-control"
      type="text"
      placeholder={rest.placeholder || ""}
      {...input}
      {...config}
    />
    {meta.error && meta.touched && (
      <span className="alert-danger">{meta.error}</span>
    )}
  </Fragment>
);

export const emailInput = ({ input, meta, ...rest }) => (
  <Fragment>
    <input className="form-control" type="email" {...input} />
    {meta.error && meta.touched && (
      <span className="alert-danger">{meta.error}</span>
    )}
  </Fragment>
);

export const passwordInput = ({ input, meta, ...rest }) => (
  <Fragment>
    <input className="form-control" type="password" {...input} />
    {meta.error && meta.touched && (
      <span className="alert-danger">{meta.error}</span>
    )}
  </Fragment>
);

export const numberInput = ({ input, meta, ...rest }) => (
  <Fragment>
    <input
      className="form-control"
      type="number"
      {...input}
      placeholder={rest.placeholder || ""}
      min={rest.min}
      max={rest.max}
    />
    {meta.error && meta.touched && (
      <span className="alert-danger">{meta.error}</span>
    )}
  </Fragment>
);

export const selectInput = ({ input, meta, options, placeholder, label }) => {
  let selectOptions = options.map((option, index) => {
    return (
      <option key={index} {...option}>
        {option.value}
      </option>
    );
  });
  return (
    <Fragment>
      <select {...input} className="form-control">
        <option value="" disabled>
          {placeholder}
        </option>
        {selectOptions}
      </select>
      {meta.error && meta.touched && (
        <span className="alert-danger">{meta.error}</span>
      )}
    </Fragment>
  );
};

export const radioInput = ({ input, meta, id, ...rest }) => {
  return (
    <div className="custom-control custom-radio">
      <input {...input} id={id} className="custom-control-input" {...rest} />
      <label className="custom-control-label" htmlFor={id}>
        {id}
      </label>
      {meta.error && meta.touched && (
        <span className="alert-danger">{meta.error}</span>
      )}
    </div>
  );
};

export const checkboxInput = ({ input, meta, id, ...rest }) => {
  useEffect(() => {
    return () => {
      input.onChange();
    };
  }, []);
  return (
    <div className="custom-control custom-checkbox">
      <input {...input} id={id} className="custom-control-input" {...rest} />
      <label className="custom-control-label" htmlFor={id}>
        {id}
      </label>
      {meta.error && meta.touched && (
        <span className="alert-danger">{meta.error}</span>
      )}
    </div>
  );
};

export const dateInput = ({ input, meta, ...rest }) => {
  return (
    <Fragment>
      <input className="form-control" {...input} {...rest} />
      {meta.error && meta.touched && (
        <span className="alert-danger">{meta.error}</span>
      )}
    </Fragment>
  );
};

export const rangeInput = ({ input, meta, ...rest }) => {
  useEffect(() => {
    input.onChange("50");
    return () => {
      input.onChange();
    };
  }, []);
  console.log(rest);
  return (
    <Fragment>
      <input className="range blue" {...input} {...rest} />
      {meta.error && meta.touched && (
        <span className="alert-danger">{meta.error}</span>
      )}
    </Fragment>
  );
};

export const specialCheckboxInput = ({ input, meta, id, ...rest }) => {
  useEffect(() => {
    return () => {
      input.onChange();
    };
  }, []);
  return (
    <div className="custom-control custom-checkbox">
      <input {...input} id={id} className="custom-control-input" {...rest} />
      <label className="custom-control-label" htmlFor={id}>
        {id}
      </label>
      {meta.error && meta.touched && (
        <span className="alert-danger">{meta.error}</span>
      )}
    </div>
  );
};
