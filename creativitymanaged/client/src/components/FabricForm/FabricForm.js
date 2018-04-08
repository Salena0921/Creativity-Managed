import React from 'react';
import "./FabricForm.css";

const FabricForm = (props) => {

	return (
		<div>
			<form>
				<div>
					<div className="form-group" id="fabric_name">
						<label className="exampleFormControlInput1">Fabric Name</label>
						<input value={props.patternname} onChange={props.handleChange} name='patternname' type='text' placeholder='Pattern Name' />						
					</div>
					<div className="form-group" id="fabric_type">
						<label className="exampleFormControlInput1">Fabric Type</label>
						<input value={props.fabrictype} onChange={props.handleChange} name='fabrictype' type='text' placeholder='Fabric Type' />						
					</div>
					<div className="form-group" id="fabric_yardage">
						<label className="exampleFormControlInput1">Fabric Yardage</label>
						<input value={props.fabricyardage} onChange={props.handleChange} name='fabricyardage' type='text' placeholder='Fabric Yardage' />						
					</div>
					<div className="form-group" id="pattern_sizes">
						<label className="exampleFormControlTextarea1">Fabric Washing Instructions</label>
						<textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
					</div>
					<div className="form-group" id="fabric_picture">
						<label className="exampleFormControlFile1" id="picture_head">Fabric Picture</label>
						<input type="file" className="form-control-file" id="exampleFormControlFile1" />
					</div>
					<button type='submit' name="sumbitform" onClick={props.handleSubmit}>Submit</button>					
				</div>
			</form>
		</div>
	);
}
export default FabricForm;


{/* <div>
							<h1>SIGN IN</h1>
							<Link to="/signup" >Go to sign up</Link>
							<form>
								<label>Email</label><br />
								<input value={props.username} onChange={props.handleChange} name='username' type='email' placeholder='example@email.com' />
								<br />
								<label>Password</label><br />
								<input name='password' type='password' value={props.password} onChange={props.handleChange} />
								<br />
								<button type='submit' name="/auth/signin" onClick={props.handleSubmit}>Sign In</button>
							</form>
						</div> */}
