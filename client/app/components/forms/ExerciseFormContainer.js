import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Loader from "../loaders/SignatureLoader";
import {
  addExercise,
  fetchExercise,
  editExercise,
} from "../../store/actions/exercises";
import { Form } from "react-final-form";
import ExerciseForm from "./ExerciseForm";

function ExerciseFormContainer({
  workouts,
  muscleGroups,
  fetchExercise,
  addExercise,
  editExercise,
  history,
  ...props
}) {
  const [formState, setFormState] = useState({
    exercise: {},
    isLoading: false,
  });

  useEffect(() => {
    let _isMounted = true;
    if (_isMounted) {
      setFormState({ ...formState, isLoading: true });
      let { exerciseId } = props.match.params;
      if (exerciseId != undefined || exerciseId != null) {
        fetchExercise(exerciseId, props.currentUser.user.id)
          .then((exercise) => {
            let fExercise = { ...exercise, muscles: [] };
            exercise.muscles.forEach((muscle) => {
              fExercise.muscles.push(muscle.muscle);
              fExercise[muscle.muscle] = muscle.percent;
            });
            setFormState({
              ...formState,
              exercise: fExercise,
              isLoading: false,
            });
          })
          .catch((err) => {
            console.log(err);
            setFormState({
              ...formState,
              isLoading: false,
            });
          });
      } else {
        setFormState({
          ...formState,
          isLoading: false,
        });
      }
    }

    return () => {
      _isMounted = false;
    };
  }, []);

  const onSubmit = (values) => {
    let trueValues = {
      name: values.name,
      restTimeBetweenSets: values.restTimeBetweenSets,
      muscleGroups: values.muscleGroups,
      sets: values.sets,
      minReps: values.minReps,
      maxReps: values.maxReps,
      resistance: values.resistance,
      muscles: [],
    };

    if (values.workout && values.workout.length !== 0) {
      trueValues.workout = values.workout;
    }

    values.muscles.forEach((muscle) => {
      trueValues.muscles.push({
        muscle: muscle,
        percent: values[muscle],
      });
    });

    if (Object.keys(formState.exercise).length !== 0) {
      return editExercise(
        props.currentUser.user.id,
        formState.exercise._id,
        trueValues
      )
        .then((res) => {
          history.push("/exercises");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return addExercise(props.currentUser.user.id, trueValues)
        .then((res) => {
          history.push("/exercises");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return formState.isLoading ? (
    <Loader />
  ) : (
    <div className="container spacing-large">
      <Form
        initialValues={formState.exercise}
        onSubmit={onSubmit}
        render={({
          handleSubmit,
          invalid,
          form,
          pristine,
          submitting,
          values,
          initialValues,
          ...props
        }) => (
          <ExerciseForm
            handleSubmit={handleSubmit}
            invalid={invalid}
            form={form}
            pristine={pristine}
            submitting={submitting}
            values={values}
            formState={formState}
            workouts={workouts}
            muscleGroups={muscleGroups}
            history={history}
            initialValues={initialValues}
          />
        )}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    workouts: state.workouts,
    muscleGroups: state.muscleGroups,
    errors: state.errors,
  };
};

export default connect(mapStateToProps, {
  addExercise,
  fetchExercise,
  editExercise,
})(ExerciseFormContainer);
