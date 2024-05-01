const Testimonial = require("../models/testimonial.model");

const createTestimonial = async (req, res) => {
    try {
      const testimonial = await Testimonial.create(req.body);
      res.status(200).json(testimonial);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const getTestimonial = async (req, res) => {
    try {
    const { id } = req.params;
    const testimonial = await Testimonial.findById(id);
    res.status(200).json(testimonial);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

const getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.status(200).json(testimonials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createTestimonial,
    getTestimonial,
    getTestimonials
};