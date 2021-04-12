const mongoose = require("mongoose");
const qualityCard = new mongoose.Schema(
  {
    icon: {
      data: Buffer,
      contentType: String,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const QualityCard = new mongoose.model("QualityCard", qualityCard);

module.exports = QualityCard;
