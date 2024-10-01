const CampaignRequest = require('../models/request-campaign.model');
// const SocialGroup = require('../models/SocialGroup');

const createRequestCampaign = async (req, res) => {
  try {
    const {socialGroupId,  email,location, contactNumber, issue, attachedImage } = req.body;

    // Logging the received request body
    console.log('Received request body:', req.body);

    // Check if the SocialGroup exists
   

    // Create a new campaign request
    const campaignRequest = new CampaignRequest({
      
      socialGroup: socialGroupId,
      email,
      location,
      contactNumber,
      issue,
      attachedImage, // Save the filename
    });

    await campaignRequest.save();
    res.status(201).json(campaignRequest);
  } catch (error) {
    console.error('Error creating campaign request:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


const deleteRequestCampaign = async (req, res) => {
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

// GET API to Retrieve Campaign Requests for a Social Group
const getRequestsCampaign= async (req, res) => {
  try {
  

    // Fetch CampaignRequests for the given SocialGroup
    const campaignRequests = await CampaignRequest.find();
    res.status(200).json(campaignRequests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
    getRequestsCampaign,
    createRequestCampaign,
deleteRequestCampaign,
};
