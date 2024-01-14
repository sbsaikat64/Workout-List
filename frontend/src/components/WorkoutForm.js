import { useState } from "react";

const WorkoutForm = ()=> {
    const[title, setTitle] = useState('');
    const[load, setLoad] = useState('');
    const[reps, setReps] = useState('');
    const[error, setError] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const workout = {title, load, reps};
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type': 'application/json'
            }

        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('new workout added')
        }
    }


    return(
        <form classname = "create" onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>
            <lebel>Workout Title: </lebel>
                <input
                type = 'text'
                onChange = {(e) => setTitle(e.target.value)}
                value = { title }
                />
            <lebel>Load (KG): </lebel>
                <input
                type = 'number'
                onChange = {(e) => setTitle(e.target.value)}
                value = { load }
                />
            <lebel>Reps: </lebel>
                <input
                type = 'number'
                onChange = {(e) => setTitle(e.target.value)}
                value = { reps }
                />
            <button>Create</button>
            {error && <div className="error">{error}</div>}


        </form>
    )
}

export default WorkoutForm;