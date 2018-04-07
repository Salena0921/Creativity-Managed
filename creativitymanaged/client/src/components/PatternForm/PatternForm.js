import React from 'react';
import "./PatternForm.css";

const PatternForm = (props) => {

	return (
		<div>
			<form>
				<div>
					<div className="form-group" id="pattern_name">
						<label for="exampleFormControlInput1">Pattern Name</label>
						<input value={props.patternname} onChange={props.handleChange} name='patternname' type='text' placeholder='Pattern Name' />
						{/* <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Pattern Name" /> */}
					</div>
					<div className="form-group" id="dropdown">
						<label for="exampleFormControlSelect1">Category</label>
						<select className="form-control" id="exampleFormControlSelect1">
							<option>Costume</option>
							<option>Dress</option>
							<option>Top</option>
							<option>Bottoms</option>
							<option>Accessory</option>
						</select>
					</div>
					<div className="form-group" id="pattern_number">
						<label for="exampleFormControlInput1">Pattern Number</label>
						<input value={props.patternnumber} onChange={props.handleChange} name='patternnumber' type='text' placeholder='Pattern Number' />
						{/* <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Pattern Number" /> */}
					</div>
					<div className="form-group" id="pattern_brand">
						<label for="exampleFormControlInput1">Pattern Brand</label>
						<input value={props.patternbrand} onChange={props.handleChange} name='patternbrand' type='text' placeholder='Pattern Brand' />
						{/* <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Pattern Brand" /> */}
					</div>
					{/* <TextArea name="patternsizes" placeholder="Pattern Sizes(Reqiured)" /> */}
					<div className="form-group" id="pattern_sizes">
						<label for="exampleFormControlTextarea1">Pattern Sizes</label>
						<textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
					</div>
					<div className="form-group" id="pattern_picture">
						<label for="exampleFormControlFile1" id="picture_head">Pattern Picture</label>
						<input type="file" className="form-control-file" id="exampleFormControlFile1" />
					</div>
					<button type='submit' name="sumbitform" onClick={props.handleSubmit}>Submit</button>
					{/* <button type="submit" className="btn btn-primary mb-2" id="submit_button">Submit</button> */}
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
