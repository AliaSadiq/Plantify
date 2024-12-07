// const express = require("express");
// const router = express.Router();
// const {
//   getTeam,
//   getTeams,
//   addTeam,
//   updateTeam,
//   deleteTeam,
// } = require("../controllers/team.controller.js");

// // router.get("/:socialId/team", getTeams);
// // router.get("/:socialId/team/:teamId", getTeam);
// // router.post("/:socialId/team", addTeam);
// // router.put("/:socialId/team/:teamId", updateTeam);
// // router.delete("/:socialId/team/:teamId", deleteTeam);

// router.get("/", getTeams);
//  router.get("/:socialId/team/:teamId", getTeam);
// router.post("/", addTeam);
// router.put("/:socialId/team/:teamId", updateTeam);
// router.delete("/:teamId", deleteTeam);

// module.exports = router;
// /server/routes/teamRoutes.js
// const express = require('express');
// const multer = require('multer'); // For file uploads
// const { getAllMembers, inviteMember, acceptInvite } = require('../controllers/teamController');

// const router = express.Router();

// const upload = multer({ dest: 'uploads/' });

// router.get('/members', getAllMembers);
// router.post('/members/invite', upload.single('picture'), inviteMember);
// router.get('/members/accept/:id', acceptInvite);

// module.exports = router;
// const express = require("express");
// const router = express.Router();
// const {
//   getTeam,
//   getTeams,
//   addTeam,
//   updateTeam,
//   deleteTeam,
// } = require("../controllers/team.controller.js");

// router.get("/", getTeams); // Get all team members
// router.get("/:socialId/team/:teamId", getTeam); // Get a single team member by ID
// router.post("/", addTeam); // Add a new team member
// router.put("/:socialId/team/:teamId", updateTeam); // Update a team member by ID
// router.delete("/:teamId", deleteTeam); // Delete a team member by ID

// module.exports = router;

const express = require("express");
const routes = express.Router();

const {
  getTeam,
  getTeams,
  addTeam,
  updateTeam,
  deleteTeam,
} = require("../controllers/team.controller.js");


routes.get("/", getTeams);
routes.get("/:id", getTeam);
routes.put("/:id", updateTeam);
routes.delete("/:id", deleteTeam);
routes.post("/", addTeam);

module.exports = routes;