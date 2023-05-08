const express = require("express");
const router = express.Router();
const Event = require("../models/eventModel");
const asyncHandler = require("express-async-handler");
const Mentor = require("../models/mentorModel");
const Schedule = require("../models/scheduleModel");

// @route   POST api/event/create
// @desc    Create an event
// @access  Private

const createEvent = asyncHandler(async (req, res) => {
  const {
    menteeEmail,
    mentorId,
    schedule,
    title,
    description,
    day,
    start,
    end,
  } = req.body;

  const foundMentor = await Mentor.findById(mentorId);
  if (!foundMentor) {
    return res.status(404).json({ err: "Mentor not found" });
  }

  const foundSchedule = await Schedule.findById(schedule);
  if (!foundSchedule) {
    return res.status(404).json({ err: "No availability set" });
  }
  if (
    Number(start) < Number(foundSchedule.dayStart) ||
    Number(end) > Number(foundSchedule.dayEnd)
  ) {
    return res.status(404).json({ err: "Event is outside of availability" });
  }
  const foundClashEvents = await Event.findOne({
    menteeEmail,
    day,
    start: { $lte: end },
    end: { $gte: start },
  });

  if (foundClashEvents) {
    return res.status(404).json({ err: "Event clashes with another event" });
  }

  const foundClashingMentorEvent = await Event.findOne({
    mentorId,
    day,
    start: { $lte: end },
    end: { $gte: start },
  });

  if (foundClashingMentorEvent) {
    return res.status(404).json({ err: "Event clashes with another event" });
  }

  const event = await Event.create({
    menteeEmail,
    mentorId,
    schedule,
    title,
    description,
    day,
    start,
    end,
  });
  await event.save();
  foundMentor.events.push(event);
  foundSchedule.events.push(event);
  await foundMentor.save();
  await foundSchedule.save();
  res.status(200).json({
    _id: event._id,
    menteeEmail: event.menteeEmail,
    mentorId: event.mentorId,
    schedule: event.schedule,
    title: event.title,
    description: event.description,
    day: event.day,
    start: event.start,
    end: event.end,
  });
});

// @route   GET api/event/get/:eventId
// @desc    get an event by id
// @access  Public

const getEventbyId = asyncHandler(async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) {
      return res.status(404).json({ err: "Event not found" });
    }
    res.status(200).json({
      _id: event._id,
      menteeEmail: event.menteeEmail,
      mentorId: event.mentorId,
      schedule: event.schedule,
      title: event.title,
      description: event.description,
      day: event.day,
      start: event.start,
      end: event.end,
    });
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
});

// @route   DELETE api/event/delete/:eventId
// @desc    Delete an event by id
// @access  Private

const deleteEventById = asyncHandler(async (req, res) => {
  try {
    const foundEvent = await Event.findById(req.params.eventId);
    if (!foundEvent) {
      return res.status(404).json({ err: "Event not found" });
    }

    const foundUser = await Mentor.findById(req.user.id);

    if (!foundUser) {
      return res.status(404).json({ err: "User not found" });
    }

    const foundSchedule = await Schedule.findById(req.params.eventId);

    if (!foundSchedule) {
      return res.status(404).json({ err: "Schedule not found" });
    }

    await foundUser.events.pull(foundEvent);
    await foundUser.save();
    await foundSchedule.events.pull(foundEvent);
    await foundSchedule.save();
    await foundEvent.delete();
    res.status(200).json({ msg: "Event deleted" });
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
});

module.exports = { createEvent, getEventbyId, deleteEventById };
