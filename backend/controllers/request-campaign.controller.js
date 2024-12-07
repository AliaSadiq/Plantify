const Request = require("../models/request-campaign.model");

// const getRequests = async (req, res) => {
//   try {
//     const requests = await Request.find({});
//     res.status(200).json(requests);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const addRequest = async (req, res) => {
  try {
    // Ensure all fields are present
    const { socialGroup, name, location, contactNumber, issue, attachedImage } = req.body;

    if (!socialGroup || !name || !location || !contactNumber || !issue || !attachedImage) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Log the incoming data for debugging
    console.log('Received Request Body:', req.body);

    // Create the request in the database (you can adjust this based on your schema)
    const request = await Request.create({
      socialGroup,
      name,
      location,
      contactNumber,
      issue,
      attachedImage, // Filename, not the actual file
    });

    res.status(200).json(request);  // Respond with the created request
  } catch (error) {
    console.error('Error creating request:', error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};


const getRequest = async (req, res) => {
  try {
    const { socialGroup } = req.query; // Use query parameters
    let requests;
    if (socialGroup) {
      // Filter by socialGroup if provided
      requests = await Request.find({ socialGroup }).populate("socialGroup");
    } else {
      // Fetch all requests if no filter
      requests = await Request.find().populate("socialGroup");
    }
    res.status(200).json(requests);
  } catch (error) {
    console.error("Error fetching requests:", error);
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
  // getRequests,
  getRequest,
  addRequest,
  updateRequest,
  deleteRequest,
};