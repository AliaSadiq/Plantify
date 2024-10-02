// routes/donate.js
const express = require('express');
const router = express.Router();
const crypto = require('crypto');

router.post('/', async (req, res) => {
  const {
    pp_TxnType,
    pp_Amount,
    pp_BillReference,
    pp_Description,
    ppmpf_1,
  } = req.body;

  // Construct the payload for the payment API
  const payload = {
    pp_Version: "1.1",
    pp_TxnType,
    pp_Language: "EN",
    pp_MerchantID: "Test00127801",
    pp_Password: "0123456789",
    pp_TxnRefNo: `T${Date.now()}`,
    pp_Amount,
    pp_TxnCurrency: "PKR",
    pp_TxnDateTime: new Date().toISOString().replace(/[-T:.Z]/g, ''),
    pp_BillReference,
    pp_Description,
    pp_ReturnURL: "https://localhost:3000/campaign-page/campaign-details-page.js",
    pp_SecureHash: "", // Hash will be calculated below
    ppmpf_1,
  };

  // Hash generation (for example purposes, replace with actual logic)
  const hashString = `${payload.pp_MerchantID}&${payload.pp_Amount}&${payload.pp_TxnRefNo}`;
  payload.pp_SecureHash = crypto.createHash('sha256').update(hashString).digest('hex');

  try {
    // Send the payload to the payment API (mocked here)
    const response = await mockPaymentApi(payload); // Replace with actual API call logic
    return res.json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Payment failed', error });
  }
});

// Mocking the payment API response for example purposes
const mockPaymentApi = (payload) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        pp_ResponseCode: '000',
        pp_ResponseMessage: 'Transaction Successful',
        pp_Amount: payload.pp_Amount,
        pp_TxnRefNo: payload.pp_TxnRefNo,
      });
    }, 1000);
  });
};

module.exports = router;
