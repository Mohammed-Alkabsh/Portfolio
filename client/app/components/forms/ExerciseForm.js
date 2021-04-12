import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import Loader from "../loaders/SignatureLoader";
import { Field } from "react-final-form";
import {
  textInput,
  radioInput,
  checkboxInput,
  numberInput,
  specialCheckboxInput,
  rangeInput,
} from "./Inputs";
import {
  required,
  minLength,
  composeValidators,
  validRange,
} from "../../helpers/Validators";

export default function ExerciseForm({
  handleSubmit,
  invalid,
  form,
  pristine,
  submitting,
  values,
  formState,
  workouts,
  muscleGroups,
  history,
  initialValues,
  ...props
}) {
  useEffect(() => {
    let _isMounted = true;
    if (_isMounted) {
      form.reset();
    }

    return () => {
      _isMounted = false;
    };
  }, [formState, workouts, muscleGroups, initialValues]);

  const workoutsRadio =
    workouts.length === 0 ? (
      <div>
        <Link
          to={{
            pathname: "/workouts/new",
            state: { from: history.location.pathname },
          }}
        >
          <BsPlusCircle color="red" />
          <p>Create New Workouts</p>
        </Link>
      </div>
    ) : (
      workouts.map((workout, index) => (
        <Field
          name="workout"
          component={radioInput}
          type="radio"
          id={workout.name}
          key={workout._id}
          value={workout._id}
        />
      ))
    );

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        {Object.keys(formState.exercise).length !== 0
          ? `Edit ${formState.exercise.name}`
          : "Create New Exercise"}
      </h2>
      {submitting && <Loader />}
      <div className="row">
        <div className="col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="name">Exercise Name</label>
            <Field
              name="name"
              placeholder="exercise name"
              component={textInput}
              validate={composeValidators(required, minLength(3))}
            />
          </div>
        </div>
        <div className="col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="restTimeBetweenSets">Rest time</label>
            <Field
              type="number"
              name="restTimeBetweenSets"
              min="0"
              max="240"
              placeholder="seconds"
              component={numberInput}
              validate={composeValidators(required, validRange(0, 240))}
            />
          </div>
        </div>
        {workouts && workouts.length > 0 && (
          <div className="col-sm-6 col-12">
            <div className="form-group">
              <label htmlFor="workout">Workout</label>
              {workoutsRadio}
            </div>
          </div>
        )}

        <div className="col-sm-6 col-12">
          <div className="form-group">
            <label>Muscle Groups To Target</label>
            {values.workout
              ? muscleGroups.length !== 0 &&
                muscleGroups
                  .filter((group) =>
                    group.targetingWorkouts.includes(values.workout)
                  )
                  .map((muscleGroup, index) => (
                    <Field
                      name="muscleGroups"
                      component={checkboxInput}
                      type="checkbox"
                      id={muscleGroup.name}
                      key={muscleGroup._id}
                      value={muscleGroup._id}
                      validate={composeValidators(required)}
                    />
                  ))
              : muscleGroups.length !== 0 &&
                muscleGroups.map((muscleGroup, index) => (
                  <Field
                    name="muscleGroups"
                    component={checkboxInput}
                    type="checkbox"
                    id={muscleGroup.name}
                    key={muscleGroup._id}
                    value={muscleGroup._id}
                    validate={composeValidators(required)}
                  />
                ))}
          </div>
        </div>
        <div className="col-sm-6 col-12">
          <div className="form-group">
            {values.muscleGroups && values.muscleGroups.length > 0 && (
              <label>Muscles To Target</label>
            )}

            {values.muscleGroups &&
              values.muscleGroups.length !== 0 &&
              muscleGroups.length !== 0 &&
              values.muscleGroups.map((targetGroups, index) => {
                let mg = muscleGroups.filter(
                  (group) => group._id === targetGroups
                );
                let childrenMuscles = mg[0].childrenMuscles.map(
                  (muscle, muscleIndex) => {
                    let percentStm = () => {
                      if (values.muscles) {
                        for (var i = 0; i < values.muscles.length; i++) {
                          if (
                            values.muscles &&
                            values.muscles[i] &&
                            values.muscles[i] === muscle._id
                          ) {
                            return (
                              <div key={"percent" + muscle._id + muscleIndex}>
                                <p>
                                  What percent of work is this muscle doing?
                                </p>

                                {values[muscle._id] && values[muscle._id] && (
                                  <div className="range-tooltip">
                                    <p
                                      style={{
                                        left: `${values[muscle._id]}%`,
                                        transform: `translateX(-${
                                          values[muscle._id]
                                        }%)`,
                                      }}
                                    >
                                      {values[muscle._id]}%
                                    </p>
                                  </div>
                                )}

                                <Field
                                  name={muscle._id}
                                  component={rangeInput}
                                  type="range"
                                  min="0"
                                  max="100"
                                  validate={composeValidators(
                                    required,
                                    validRange(0, 100)
                                  )}
                                />
                              </div>
                            );
                            break;
                          }
                        }
                      }
                    };

                    return (
                      <div key={muscle._id + muscleIndex}>
                        <Field
                          name={`muscles`}
                          component={specialCheckboxInput}
                          type="checkbox"
                          id={muscle.name}
                          value={muscle._id}
                          validate={composeValidators(required)}
                        />
                        {percentStm()}
                      </div>
                    );
                  }
                );
                return mg[0].childrenMuscles.length > 0 ? (
                  <div
                    key={`mg${targetGroups._id}-${index}`}
                    className="form-group"
                  >
                    <label>{mg[0].name}</label>
                    {childrenMuscles}
                  </div>
                ) : null;
              })}
          </div>
        </div>

        <div className="col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="Resistance">Resistance</label>
            <div className="row">
              <div className="col-7">
                <Field
                  type="number"
                  name="resistance.weight"
                  min="0"
                  max="1000"
                  placeholder="weight"
                  component={numberInput}
                  validate={composeValidators(required, validRange(0, 1000))}
                />
              </div>
              <div className="col-5">
                <Field
                  name="resistance.unit"
                  component={radioInput}
                  type="radio"
                  id="lbs"
                  value="lbs"
                  validate={composeValidators(required)}
                />
                <Field
                  name="resistance.unit"
                  component={radioInput}
                  type="radio"
                  id="kg"
                  value="kg"
                  validate={composeValidators(required)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="workout">Sets</label>
            <Field
              type="number"
              name="sets"
              min="0"
              max="10"
              placeholder="sets"
              component={numberInput}
              validate={composeValidators(required, validRange(0, 10))}
            />
          </div>
        </div>

        <div className="col-6">
          <div className="form-group">
            <label htmlFor="workout">Min Reps</label>
            <Field
              type="number"
              name="minReps"
              min="0"
              max={values.maxReps ? values.maxReps : 0}
              placeholder="min reps"
              component={numberInput}
              validate={composeValidators(required, validRange(0, 1000))}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="workout">Max Reps</label>
            <Field
              type="number"
              name="maxReps"
              min={values.minReps ? values.minReps : 0}
              max="1000"
              placeholder="max reps"
              component={numberInput}
              validate={composeValidators(required, validRange(0, 1000))}
            />
          </div>
        </div>
      </div>
      <div className="row">
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
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
