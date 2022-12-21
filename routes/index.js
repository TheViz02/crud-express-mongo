let express = require('express');
let router = express.Router();
const { showData, createData, deleteData, updateData } = require('../controllers/fetchData');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.status(200);
    res.json({
        title: 'Express',
        message: `Welcome to Yash's Backend for Mongo App. This is Index Route.`
    });
});

router.get('/api', (req, res) => {
    res.json({
        message: "Hello from express API, This Backend Uses MongoDB"
    });
});

router.get('/showBlog', showData);
router.post('/createBlog', createData);
router.post('/updateBlog/:id', updateData);
router.post('/deleteBlog/:id', deleteData)

module.exports = router;