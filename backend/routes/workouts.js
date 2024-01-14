const express = require('express');

const router = express.Router();

const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutcontrollers')


//get all the workouts
router.get('/', getWorkouts);

//get a single workout
router.get('/:id', getWorkout);

//create a new workout
router.post('/', createWorkout);

//delete a workout
router.delete('/:id', deleteWorkout);

//update a workout
router.patch('/:id', updateWorkout);

module.exports = router