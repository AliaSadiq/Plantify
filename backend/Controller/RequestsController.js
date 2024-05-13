const Request = require("../Models/RequestsModel.js");

const getRequests = async (req, res) => {
  try {
    const requests = await Request.find({});
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addRequest = async (req, res) => {
  try {
    const request = await Request.create(req.body);
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await Request.findById(id);
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRequest = await Request.findByIdAndUpdate(id, req.body);
    if (!updatedRequest) {
      return res.status(404).json({ message: "Request not found" });
    }
    res.status(200).json(updatedRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRequest = await Request.findByIdAndDelete(id);
    if (!deletedRequest) {
      return res.status(404).json({ message: "Request not found" });
    }
    res.status(200).json(deletedRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRequests,
  getRequest,
  addRequest,
  updateRequest,
  deleteRequest,
};
