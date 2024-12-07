const express = require("express");
const router = express.Router();
const {
    createSeller, 
    getSellersOnWait,
    getSellersCountOnWait,
    getSeller,
    updateSeller
} = require('../controllers/seller.controller');


router.get("/on-wait", getSellersOnWait);
router.get("/count-on-wait", getSellersCountOnWait);
router.post("/", createSeller);
router.get("/:id", getSeller);
router.put("/:id", updateSeller);

module.exports = router;