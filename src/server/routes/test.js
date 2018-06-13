const express = require('express');
const router = express.Router();

router.get('/', function(request, response) {
    response.contentType('application/json');
    response.send(JSON.stringify({
        name: "John doe",
        age: 25,
        gender: "male"
    }, null, 3))
});

module.exports = router;