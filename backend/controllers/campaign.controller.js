const Campaign = require("../models/campaign.model");

const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.aggregate([
        {
            $project: {
            name: 1,
            image: 1,
            location: 1,
            start_date: { $dateToString: { format: "%d-%m-%Y", date: "$start_date" } },
            end_date: { $dateToString: { format: "%d-%m-%Y", date: "$end_date" } },
            target_donation: 1,
            collected_donation: 1,
            status: 1
            }
        }
    ]);
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const campaign = await Campaign.findById(id);
    res.status(200).json(campaign);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.create(req.body);
    res.status(200).json(campaign);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
    getCampaign,
    getCampaigns,
    createCampaign
};