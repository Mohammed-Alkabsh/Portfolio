import React, { useState, useEffect } from "react";
import LineChart from "./LineChart";

export default function ExercisesProgress({ data }) {
  const [state, setState] = useState([]);

  useEffect(() => {
    let _isMounted = true;

    if (_isMounted) {
      data.forEach((exercise) => {
        const exerciseData = [];
        const exerciseName = exercise.exercise.name;
        const exerciseId = exercise.exercise._id;
        exercise.sets.forEach((set) => {
          const setData = {
            reps: set.reps,
            resistance: set.resistance,
            when: set.createdAt,
          };
          exerciseData.push(setData);
        });

        setState((prevState) => {
          const oldExercise = prevState.filter(
            (data) => data.id === exerciseId
          );

          if (oldExercise.length > 0 && oldExercise[0].id === exerciseId) {
            const newExercise = {
              name: exerciseName,
              id: exerciseId,
              data: [...oldExercise[0].data, ...exerciseData],
            };
            const filteredState = prevState.filter(
              (ps) => ps.id !== oldExercise[0].id
            );
            if (filteredState.length > 0) {
              return [...filteredState, newExercise];
            } else {
              return [newExercise];
            }
          } else {
            const newExercise = {
              name: exerciseName,
              id: exerciseId,
              data: exerciseData,
            };
            console.log(newExercise);
            return [...prevState, newExercise];
          }
        });
      });
    }

    return () => {
      _isMounted = false;
    };
  }, [data]);
  const lineCharts = state.map((exercise, i) => {
    return (
      <div className="chart" key={`exercise-chart-${i}`}>
        <h4 className="text-center">{exercise.name}</h4>
        <LineChart data={exercise.data} />
      </div>
    );
  });
  return <div>{lineCharts}</div>;
}
