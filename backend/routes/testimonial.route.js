const express = require("express");
const router = express.Router();
const {createTestimonial, getTestimonial, getTestimonials} = require( '../controllers/testimonial.controller.js');

router.post("/", createTestimonial);
router.get("/:id", getTestimonial);
router.get("/", getTestimonials);

module.exports = router;