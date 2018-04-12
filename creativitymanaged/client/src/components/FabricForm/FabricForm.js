import React from 'react';
import "./FabricForm.css";

const FabricForm = (props) => {

	return (
		<div>
			<form className="fabricform">
				<div>
					<div className="form-group" id="fabric_name">
						<label className="exampleFormControlInput1">Fabric Name</label>
						<input onChange={props.handleInputChange} name='fabricname' type='text' placeholder='Fabric Name' className="exampleFormControlFile2" />						
					</div>
					<div className="form-group" id="fabric_type">
						<label className="exampleFormControlInput1">Fabric Type</label>
						<input onChange={props.handleInputChange} name='fabrictype' type='text' placeholder='Fabric Type' className="exampleFormControlFile2" />						
					</div>
					<div className="form-group" id="fabric_yardage">
						<label className="exampleFormControlInput1">Fabric Yardage</label>
						<input onChange={props.handleInputChange} name='fabricyardage' type='text' placeholder='Fabric Yardage' className="exampleFormControlFile2" />						
					</div>
					<div className="form-group" id="fabric_washing">
						<label className="exampleFormControlTextarea1">Fabric Washing Instructions</label>
						<textarea className="form-control" id="exampleFormControlTextarea2" rows="10" name='fabricwashing' type='text' placeholder='Fabric Washing Instructions' onChange={props.handleInputChange}></textarea>
					</div>
					<div className="form-group" id="fabric_picture">
						<label className="exampleFormControlFile1" id="picture_head">Fabric Picture</label>
						<input type="file" className="form-control-file" id="exampleFormControlFile1" />
					</div>
					<button type='submit' name="sumbitform" onClick={props.handleFormSubmit} id="fabricsubmit">Submit</button>					
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
								<input value={props.username} onChange={props.handleInputChange} name='username' type='email' placeholder='example@email.com' />
								<br />
								<label>Password</label><br />
								<input name='password' type='password' value={props.password} onChange={props.handleInputChange} />
								<br />
								<button type='submit' name="/auth/signin" onClick={props.handleSubmit}>Sign In</button>
							</form>
						</div> */}
