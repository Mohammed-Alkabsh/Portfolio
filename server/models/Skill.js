const mongoose = require("mongoose");
const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    experiencePercent: {
      type: String,
      required: true,
    },
    dateLearned: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Skill = new mongoose.model("Skill", skillSchema);

module.exports = Skill;
