const express = require('express')
const router = express.Router()

// controllers
const category = require('./controllers/CategoryController')

router.get('/', async (req, res) => {

    var response = {};
    response.message = "Node Started";

    res.send(response);
})

router.get('/categories', category.all)
router.get('/categories/:id/show', category.show)
module.exports = router