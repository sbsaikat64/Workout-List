const express = require('express');
const mongoose = require('mongoose');
const Workout = require('../models/workoutModels');

//get all workout
const getWorkouts = async(req, res) => {
    const workouts = await Workout.find({});
    res.status(200).json(workouts);
}

//get individual workout
const getWorkout = async(req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg: "Not found"});
    }
    const workout = await Workout.findById(id);
    res.status(200).json(workout);
}

//create a workout
const createWorkout = async(req, res) => {
    const {title, load, reps} = req.body;
    try{
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error: error.message});
    };
}
//delete a workout
const deleteWorkout = async(req, res) => {
    const{ id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg: "Not found"});
    }
    const workout = await Workout.findOneAndDelete({_id: id});
    if(!workout){
        return res.status(200).json({mssg: "No such data"});
    }
    res.status(400).json({mssg: "Workout Deleted"});
}

//update a workout
const updateWorkout = async(req, res) => {
    const{ id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg: "Not found"});
    }
    const workout = await Workout.findOneAndUpdate({_id: id}, { ...req.body});
    if(!workout){
        return res.status(200).json({mssg: "No such data"})
    }
    const workoutUpdated = await Workout.findById(id);
    res.status(400).json(workoutUpdated);
}


module.exports={
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}