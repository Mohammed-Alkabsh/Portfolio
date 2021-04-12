const mongoose = require("mongoose");
const employerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

const Employer = new mongoose.model("Employer", employerSchema);

module.exports = Employer;
