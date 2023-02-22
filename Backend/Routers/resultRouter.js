const express = require('express');

const {getResultBySymbolNumber,putResult} = require('../controllers/resultController');


const router = express.Router();

// router.get('/', resultController.getAllResults);
// router.get('/:symbolnumber', resultController.getResultBySymbolNumber);
router.route('/:symbolnumber').post(getResultBySymbolNumber);
router.route('/putresult').post(putResult);

module.exports = router;