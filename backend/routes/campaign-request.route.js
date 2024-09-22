const express = require('express');
const router = express.Router();
const { getRequests,
    getRequest,
    addRequest,
    updateRequest,
    deleteRequest } = require('../controllers/campaign-request.controllers');

router.post('/', addRequest);
router.get('/:id', getRequests);
router.get('/', getRequest);
router.add('/', addRequest);
router.put('/id',updateRequest);
router.delete('/:id', deleteRequest);
getRequests,
getRequest,
addRequest,
updateRequest,
deleteRequest
module.exports = router;