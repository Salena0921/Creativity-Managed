import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

const SignIn = (props)=> {

	return (
		<div className="homepage" >
			<h3 id="fairysignin">WELCOME TO THE FAIRY REALM</h3>
			<h4>Please Sign In to Enter</h4>
			<Link to = "/signup" id="link">New Fairies Please Sign Up</Link>
			<form>
				<label>Email</label><br/>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				<br />
				<label>Password</label><br/>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button>
			</form>
		</div>
	);

}

export default SignIn;