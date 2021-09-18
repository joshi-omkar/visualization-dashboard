const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  end_year: {
    type: String,
    
  },
  intensity: {
    type: Number,
    default: 0,
  },
  sector: {
    type: String,
  },
  topic: {
    type: String,
  },
  insight: {
    type: String,
  },
  url: {
    type: String,
  },
  region: {
    type: String,
  },
  start_year: {
    type: Number,
    default:0,
  },
  impact: {
    type: String,
  },
  added: {
    type: String,
  },
  published: {
    type: String,
  },
  country: {
    type: String,
  },
  relevance: {
    type: Number,
    default:0,
  },
  pestle: {
    type: String,
  },
  source: {
    type: String,
  },
  title: {
    type: String,
  },

  likelihood: {
    type: Number,
    default:0,
  },

  
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

