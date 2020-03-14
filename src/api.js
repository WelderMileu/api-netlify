const serverless = require('serverless-http');
const express = require('express');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
	res.json({
		status : 200
	})
})


app.use('/.netlify/functions/api', router);


module.exports.handler = serverless(app);
