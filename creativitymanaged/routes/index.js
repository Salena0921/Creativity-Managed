module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const patternRoutes = require("./api/patterns");
	const fabricRoutes = require("./api/fabrics");
	const designRoutes = require("./api/designs");


	router.use("/auth",require("./authRoutes.js")(passport));
	router.use("/api/patterns", patternRoutes);
	router.use("/api/fabrics", fabricRoutes);
	router.use("/api/designs", designRoutes);
	//add more routes here
	

	// If no API routes are hit, send the React app
	router.use(function(req, res) {
	  res.sendFile(path.join(__dirname, "../client/build/index.html"));
	});

	return router;
};