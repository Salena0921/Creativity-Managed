import React from 'react';
import "./DesignForm.css";

const DesignForm = (props) => {

	return (
		<div>
			<form className="designform">
				<div>
					<div className="form-group" id="design_name">
						<label className="exampleFormControlInput1">Design Name</label>
						<input onChange={props.handleInputChange} name='designname' type='text' placeholder='Design Name' className="exampleFormControlFile2" />					
					</div>
					<div className="form-group" id="design_concept">
						<label className="exampleFormControlInput1">Design Concept</label>
						<input onChange={props.handleInputChange} name='designconcept' type='text' placeholder='Design Concept' className="exampleFormControlFile2" />						
					</div>								
					<div className="form-group" id="design_description">
						<label className="exampleFormControlTextarea1">Design Description</label>
						<textarea className="form-control" id="exampleFormControlTextarea2" rows="10" name='designdescription' type='text' placeholder='Design Description' onChange={props.handleInputChange}></textarea>
					</div>
					<div className="form-group" id="design_picture">
						<label className="exampleFormControlFile1" id="picture_head">Design Picture</label>
						<input type="file" className="form-control-file exampleFormControlFile2" id="picture" />
					</div>
					<button type='submit' name="sumbitform" onClick={props.handleFormSubmit} id="designsubmit">Submit</button>					
				</div>
			</form>
		</div>
	);
}
export default DesignForm;


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
