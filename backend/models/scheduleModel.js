const Mongoose = require("mongoose");

const scheduleSchema = new Mongoose.Schema({
  mentor: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "Mentor",
  },
  day: {
    type: Date,
    required: true,
  },
  dayStart: {
    type: String,
    required: true,
  },
  dayEnd: {
    type: String,
    required: true,
  },
  eventDuration: {
    type: Number,
    required: true,
  },
  events: [
    {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
});

const schedule = Mongoose.model("Schedule", scheduleSchema);
module.exports = schedule;
