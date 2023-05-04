const asyncHandler = require("express-async-handler");
const Schedule = require("../models/scheduleModel");
const Mentor = require("../models/mentorModel");

// @desc    Create Schedule
// @route   Post /api/schedule/create
// @access  Private
const createSchedule = asyncHandler(async (req, res) => {
  try {
    const { day, dayStart, dayEnd, eventDuration } = req.body;
    const user = req.user._id;
    const foundUser = await Mentor.findById(user);
    if (!foundUser) {
      return res.status(404).json({ err: "User not found" });
    }

    let schedules = [];
    if (Array.isArray(req.body.data)) {
      // If the request body is an array, loop through each object and create a new schedule for each one
      for (const scheduleData of req.body.data) {
        const { day, dayStart, dayEnd, eventDuration } = scheduleData;

        const presentSchedule = await Schedule.findOne({ user, day });
        if (presentSchedule) {
          // If schedule already exists, skip to the next object
          continue;
        }

        const scheduleStart = Number(dayStart.replace(":", "."));
        const scheduleEnd = Number(dayEnd.replace(":", "."));
        const schedule = await Schedule.create({
          mentor: user,
          day,
          dayStart: scheduleStart,
          dayEnd: scheduleEnd,
          eventDuration,
        });
        await schedule.save();
        foundUser.schedules.push(schedule);
        schedules.push(schedule);
      }
    } else {
      // If the request body is a single object, create a new schedule for it
      const presentSchedule = await Schedule.findOne({ user, day });
      if (presentSchedule) {
        return res.status(403).json({ err: "Schedule already exists" });
      }

      const scheduleStart = Number(dayStart.replace(":", "."));
      const scheduleEnd = Number(dayEnd.replace(":", "."));
      const schedule = await Schedule.create({
        mentor: user,
        day,
        dayStart: scheduleStart,
        dayEnd: scheduleEnd,
        eventDuration,
      });
      await schedule.save();
      foundUser.schedules.push(schedule);
      schedules.push(schedule);
    }

    await foundUser.save();
    res.status(200).json(
      schedules.map((schedule) => ({
        _id: schedule._id,
        mentor: schedule.mentor,
        day: schedule.day,
        dayStart: schedule.dayStart,
        dayEnd: schedule.dayEnd,
        eventDuration: schedule.eventDuration,
      }))
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ err: error });
  }
});

// @desc    Get a Schedule
// @route   GET /api/get/:userId
// @access  Public

const getSchedule = asyncHandler(async (req, res) => {
  try {
    const foundUser = await Mentor.findById(req.params.userId);
    if (!foundUser) {
      return res.status(404).json({ err: "User not found" });
    }
    const schedule = await Schedule.find({ mentor: req.params.userId });
    if (!schedule) {
      return res.status(404).json({ err: "Schedule not found" });
    }
    res.status(200).json(schedule);
  } catch (error) {
    return res.status(500).json({ err: error });
  }
});

// @desc    Update an Schedule by schedule id
// @route   Put /api/schedule/:scheduleId
// @access  Private

const updateSchedule = asyncHandler(async (req, res) => {
  try {
    const foundSchedule = await Schedule.findById(req.params.scheduleId);
    if (!foundSchedule) {
      return res.status(404).json({ err: "Schedule not found" });
    }
    if (foundSchedule.events.length > 0) {
      return res
        .status(403)
        .json({ err: "Cannot update a schedule with events" });
    }

    const { dayStart, dayEnd, eventDuration } = req.body;
    const scheduleStart = Number(dayStart.replace(":", "."));
    const scheduleEnd = Number(dayEnd.replace(":", "."));
    const updateSchedule = await Schedule.updateOne(
      { _id: req.params.scheduleId },
      {
        dayStart: scheduleStart,
        dayEnd: scheduleEnd,
        eventDuration,
      }
    );
    console.log("Hy");
    res.status(200).json(updateSchedule);
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
});

// @desc    Delete an Schedule by schedule id
// @route   Delete /api/schedule/:scheduleId
// @access  Private

const deleteSchedule = asyncHandler(async (req, res) => {
  try {
    const foundUser = await Mentor.findById(req.user._id);
    if (!foundUser) {
      return res.status(404).json({ err: "Mentor not found" });
    }
    const foundSchedule = await Schedule.findById(req.params.scheduleId);

    if (!foundSchedule) {
      return res.status(403).json({ err: "Schedule not found" });
    }

    if (foundSchedule.events.length > 0) {
      return res
        .status(403)
        .json({ err: "Cannot delete a schedule with events" });
    }

    await Schedule.findByIdAndDelete(req.params.scheduleId);
    foundUser.schedules.pull(req.params.scheduleId);
    await foundUser.save();
    res.status(200).json({ msg: "Schedule deleted" });
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
});

module.exports = {
  createSchedule,
  getSchedule,
  updateSchedule,
  deleteSchedule,
};
