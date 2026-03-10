import React from "react"
import Navbar from "./components/Navbar"

export default function Home(){

return(

<div>

<Navbar/>

<h1>Student Planner Dashboard</h1>

<div className="cards">

<div className="card">
<h3>Schedule</h3>
<p>View your classes</p>
</div>

<div className="card">
<h3>Tasks</h3>
<p>Track homework</p>
</div>

<div className="card">
<h3>Study Planner</h3>
<p>Plan study time</p>
</div>

<div className="card">
<h3>AI Assistant</h3>
<p>Ask study questions</p>
</div>

</div>

</div>

)

}