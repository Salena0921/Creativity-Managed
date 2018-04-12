import React from 'react';
import "./PatternForm.css";

const PatternForm = (props) => {

	return (
		<div>
			<form className="patternform">
				<div>
					<div className="form-group" id="pattern_name">
						<label className="exampleFormControlInput1">Pattern Name</label>
						<input onChange={props.handleInputChange} name='patternname' type='text' placeholder='Pattern Name' className="exampleFormControlFile2"/>						
					</div>
					<div className="form-group" id="pattern_category">
						<label className="exampleFormControlSelect1">Category</label>
						<select onChange={props.handleInputChange} name='patterncategory' className="form-control" id="exampleFormControlSelect1">
							<option>Costume</option>
							<option>Dress</option>
							<option>Top</option>
							<option>Bottoms</option>
							<option>Accessory</option>
						</select>
					</div>
					<div className="form-group" id="pattern_number">
						<label className="exampleFormControlInput1">Pattern Number</label>
						<input onChange={props.handleInputChange} name='patternnumber' type='text' placeholder='Pattern Number' className="exampleFormControlFile2"/>						
					</div>
					<div className="form-group" id="pattern_brand">
						<label className="exampleFormControlInput1">Pattern Brand</label>
						<input onChange={props.handleInputChange} name='patternbrand' type='text' placeholder='Pattern Brand' className="exampleFormControlFile2"/>						
					</div>					
					<div className="form-group" id="pattern_sizes">
						<label className="exampleFormControlTextarea1">Pattern Sizes</label>
						<textarea className="form-control" id="exampleFormControlTextarea2" rows="10" name='patternsizes' type='text' placeholder='Pattern Sizes' onChange={props.handleInputChange}></textarea>
					</div>
					<div className="form-group" id="pattern_picture">
						<label className="exampleFormControlFile1" id="picture_head">Pattern Picture</label>
						<input type="file" className="form-control-file" id="exampleFormControlFile1" />
					</div>
					<button type='submit' name="sumbitform" onClick={props.handleFormSubmit} id="patternsubmit">Submit</button>					
				</div>
			</form>
		</div>
	);
}
export default PatternForm;


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
