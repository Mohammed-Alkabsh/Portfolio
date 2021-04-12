const mongoose = require("mongoose");
const homeSchema = new mongoose.Schema({
  heroHeadingOne: {
    type: String,
    required: true,
  },
  heroHeadingTwo: {
    type: String,
    required: true,
  },
  heroTitles: [],
  heroButtonText: {
    type: String,
    required: true,
  },
  heroButtonURL: {
    type: String,
    required: true,
  },
  aboutSectionHeading: {
    type: String,
    required: true,
  },
  myAboutImage: {
    data: Buffer,
    contentType: String,
  },
  myAboutDescription: {
    type: String,
    required: true,
  },
  aboutCards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "QualityCard",
    },
  ],
  skills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skill",
    },
  ],
  projectsSectionHeading: {
    type: String,
    required: true,
  },
  employers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employer",
    },
  ],
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
  contactSectionHeading: {
    type: String,
    required: true,
  },
  formHeading: {
    type: String,
    required: true,
  },
});

const Home = new mongoose.model("Home", homeSchema);

module.exports = Home;
