import React, {useState} from "react";
import Navbar from "../components/Navbar";

function Tasks(){

const [tasks,setTasks] = useState([]);
const [task,setTask] = useState("");

function addTask(){

setTasks([...tasks,task]);
setTask("");

}

return(

<div>

<Navbar/>

<h2>Homework Tasks</h2>

<input
value={task}
onChange={(e)=>setTask(e.target.value)}
placeholder="New task"
/>

<button onClick={addTask}>Add</button>

<ul>

{tasks.map((t,i)=>(
<li key={i}>{t}</li>
))}

</ul>

</div>

)

}

export default Tasks;