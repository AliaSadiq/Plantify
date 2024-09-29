const express = require('express');
const router = express.Router();
const { createRequestCampaign,
    getRequestsCampaign,
        deleteRequestCampaign } = require('../controllers/campaign-request.controller');

router.post('/', createRequestCampaign);
router.get('/', getRequestsCampaign);
router.delete('/:id', deleteRequestCampaign);

module.exports = router;