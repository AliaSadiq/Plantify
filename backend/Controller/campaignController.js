const Campaign = require("../Models/Campaign.js");
const getCampaigns = async (req, res) => {

  try {
 
    // Find campaigns based on the filter
    const campaigns = await Campaign.find();
   const locationData = campaigns.map(campaign => campaign.location);
    // // const province =campaigns.map(campaign => campaign.province);
    // // Group campaigns by year and count them
    const campaignCountByYear = await Campaign.aggregate([
     
      {
        $group: {
          _id: { $year: { $toDate: "$startDate" } }, // Convert Date field to Date object if it's stored as a string
          count: { $sum: 1 }
        }
      }
    ]);
   
    res.status(200).json({ campaigns, campaignCountByYear,locationData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// const getCampaigns = async (req, res) => {
//   try {
//     // Find all campaigns
//     const campaigns = await Campaign.find();
    
//     // Extract location data
//     const locationData = campaigns.map(campaign => campaign.location);

//     // Group campaigns by year and month and count them
//     const campaignCountByMonth = await Campaign.aggregate([
//       {
//         $group: {
//           _id: {
//             year: { $year: { $toDate: "$Date" } },
//             month: { $month: { $toDate: "$Date" } }
//           },
//           count: { $sum: 1 }
//         }
//       },
//       {
//         $project: {
//           _id: 0,
//           month: { $concat: [{ $toString: "$_id.year" }, "-", { $toString: "$_id.month" }] },
//           count: 1
//         }
//       },
//       {
//         $sort: { month: 1 }
//       }
//     ]);

//     res.status(200).json({ campaigns, campaignCountByMonth, locationData });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const addCampaign = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Add this line
    const campaigns = await Campaign.create(req.body);
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const campaigns = await Campaign.findById(id);
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCampaign = await Campaign.findByIdAndUpdate(id, req.body);
    if (!updatedCampaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }
    res.status(200).json(updatedCampaign);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCampaign = await Campaign.findByIdAndDelete(id);
    if (!deletedCampaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }
    res.status(200).json(deletedCampaign);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCampaigns,
  getCampaign,
  addCampaign,
  updateCampaign,
  deleteCampaign,
};
