import React from 'react';
import "./DesignForm.css";

const DesignForm = (props) => {

	return (
		<div>
			<form>
				<div>
					<div className="form-group" id="design_name">
						<label className="exampleFormControlInput1">Design Name</label>
						<input value={props.designname} onChange={props.handleChange} name='designname' type='text' placeholder='Design Name' />					
					</div>
					<div className="form-group" id="design_concept">
						<label className="exampleFormControlInput1">Design Concept</label>
						<input value={props.designconcept} onChange={props.handleChange} name='designconcept' type='text' placeholder='Design Concept' />						
					</div>								
					<div className="form-group" id="design_description">
						<label className="exampleFormControlTextarea1">Design Description</label>
						<textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
					</div>
					<div className="form-group" id="design_picture">
						<label className="exampleFormControlFile1" id="picture_head">Design Picture</label>
						<input type="file" className="form-control-file" id="exampleFormControlFile1" />
					</div>
					<button type='submit' name="sumbitform" onClick={props.handleSubmit}>Submit</button>					
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
