const express = require("express");
const router = express.Router();
const {
    createSeller, 
    getSellersOnWait,
    getSellersCountOnWait
} = require('../controllers/seller.controller');

router.post("/", createSeller);
router.get("/on-wait", getSellersOnWait);
router.get("/count-on-wait", getSellersCountOnWait);

module.exports = router;