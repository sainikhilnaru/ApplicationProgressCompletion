import React, { Component } from 'react';

class LandingPage extends Component{
	render(){
		return(
			
			<div>
                <h1>List Todos</h1>
                <div class="alert alert-success"></div>
				<div className="container">
					<table className="table">
						<thead>
							<tr>
								<th>Description</th>
								<th>Target Date</th>
								<th>IsCompleted?</th>
								<th>Update</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
		
								
							<tr >
								<td>Description</td>
								<td>Year</td>
								<td>Done</td>
								<td><button className="btn btn-success" >Update</button></td>
								<td><button className="btn btn-warning">Delete</button></td>
							</tr>
								
							
						</tbody>
					</table>
					<div className="row">
						<button className="btn btn-success" >Add</button>
					</div>
				</div>
            </div>
		)
		
	}
}

export default LandingPage