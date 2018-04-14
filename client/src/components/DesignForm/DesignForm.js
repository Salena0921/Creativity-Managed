import React from 'react';
import "./DesignForm.css";
import ReactS3Uploader from "../../pages/AWS-S3/s3uploader";

const DesignForm = (props) => {

	return (
		<div>
			<form method="POST" action="/save-details" className="designform">
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
					<div id="design_picture">
						<ReactS3Uploader />
					</div>
					<button type='submit' name="sumbitform" onClick={props.handleFormSubmit} id="designsubmit">Submit</button>
				</div>
			</form>

		</div>
	);
}
export default DesignForm;
