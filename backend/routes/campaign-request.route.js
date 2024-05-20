const express = require('express');
const router = express.Router();
const { getRequestCampaign,createRequestCampaign } = require('../controllers/campaign-request.controller.js');

router.post('/', createRequestCampaign);
router.get('/', getRequestCampaign);


module.exports = router;