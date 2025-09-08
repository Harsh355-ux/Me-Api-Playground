const express = require("express");
const Profile = require("../models/Profile");

const router = express.Router();

// Save profile (POST)
router.post("/", async (req, res) => {
  try {
    const body = req.body;

    const formattedProfile = {
      ...body,
      skills: Array.isArray(body.skills)
        ? body.skills
        : body.skills?.split(",").map((s) => s.trim()) || [],
      projects: Array.isArray(body.projects)
        ? body.projects
        : body.projects?.split(",").map((p) => p.trim()) || [],
      workExperience: Array.isArray(body.workExperience)
        ? body.workExperience
        : body.workExperience?.split(",").map((w) => w.trim()) || [],
    };

    const profile = new Profile(formattedProfile);
    await profile.save();

    res.json({ message: "Profile saved successfully", profile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error saving profile" });
  }
});

// Get latest profile (GET)
router.get("/", async (req, res) => {
  try {
    const profile = await Profile.findOne().sort({ _id: -1 });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: "Error fetching profile" });
  }
});

// Update profile (PUT)
router.put("/:id", async (req, res) => {
  try {
    const body = req.body;

    const formattedProfile = {
      ...body,
      skills: Array.isArray(body.skills)
        ? body.skills
        : body.skills?.split(",").map((s) => s.trim()) || [],
      projects: Array.isArray(body.projects)
        ? body.projects
        : body.projects?.split(",").map((p) => p.trim()) || [],
      workExperience: Array.isArray(body.workExperience)
        ? body.workExperience
        : body.workExperience?.split(",").map((w) => w.trim()) || [],
    };

    const updatedProfile = await Profile.findByIdAndUpdate(
      req.params.id,
      formattedProfile,
      { new: true }
    );

    res.json(updatedProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating profile" });
  }
});

// Delete profile (DELETE)
router.delete("/:id", async (req, res) => {
  try {
    await Profile.findByIdAndDelete(req.params.id);
    res.json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting profile" });
  }
});

module.exports = router;
