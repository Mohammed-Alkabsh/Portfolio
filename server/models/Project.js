const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employer",
    },
    skillsUsed: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
      },
    ],
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project = new mongoose.model("Project", projectSchema);

module.exports = Project;
