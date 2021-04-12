import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fancy from "../loaders/FancyLoader";

export default function PreformExerciseNotification({
  currentExercise,
  workout,
  showNotification,
}) {
  const [showDropDown, setShowDropDown] = useState(false);
  if (
    !currentExercise ||
    !currentExercise.exercise ||
    !currentExercise.exercise._id ||
    showNotification === false
  ) {
    return <Fancy />;
  } else {
    return (
      <div
        className={`alert alert-secondary ${showDropDown ? "open" : ""}`}
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <div className="container text-center">
          <h6>Current Exercise</h6>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-6">
              <p className="alert-label">Name</p>
              <h3>{currentExercise.exercise.name}</h3>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <p className="alert-label">Target Muscle Groups</p>
              <h3>
                {currentExercise.muscleGroups.map((item, i) => {
                  return i === 0 ? (
                    <span key={`cur-exe-aler-${i}-${item.name._id}`}>
                      {item.name}
                    </span>
                  ) : (
                    <span key={`cur-exe-aler-${i}-${item.name._id}`}>
                      {" "}
                      + {item.name}
                    </span>
                  );
                })}
              </h3>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <p className="alert-label">Completed Sets</p>
              <h3>{currentExercise.sets.length}</h3>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <p className="alert-label">Remaining Sets</p>
              <h3>
                {currentExercise.exercise.sets - currentExercise.sets.length}
              </h3>
            </div>
            <div className="col-12">
              <Link
                className="btn btn-secondary"
                to={`/workouts/${workout._id}/perform/${currentExercise.preformWorkout}/exercise/${currentExercise.exercise._id}`}
              >
                Go to exercise
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
