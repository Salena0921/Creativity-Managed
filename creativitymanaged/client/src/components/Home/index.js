import React from 'react';
// import Nav from "../Nav";
import Nav from '../Nav'
import "./style.css";

const Home = (props) =>{
	return (
		<div>
			<Nav/>
			<h1>You should only see this if you are logged in!</h1>
			<p>{props.auth.username}</p>
			<button onClick = {props.handleLogout}>Log Out</button>
		</div>
	);
}

export default Home;