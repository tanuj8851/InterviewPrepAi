const Session = require("../models/Session");
const Question = require("../models/Question");

//@desc  Create a new session and linked question
//route POST /api/sessions/create
//@access Private
const createSession = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, description, questions } =
      req.body;
    const userId = req.user._id; //Assuming you have a middleware setting req.user

    const session = await Session.create({
      user: userId,
      role,
      experience,
      topicsToFocus,
      description,
    });

    const questionsDocs = await Promise.all(
      questions.map(async (q) => {
        const question = await Question.create({
          session: session._id,
          question: q.question,
          answer: q.answer,
        });
        return question._id;
      })
    );

    session.questions = questionsDocs;
    await session.save();

    res.status(201).json({ success: true, session });
  } catch (error) {
    res.status(500).send({ success: false, message: "Server Error." });
    console.log({ err: error.message });
  }
};

//@desc  Get all sessions  for the logged in user
//route POST /api/sessions/my-sessions
//@access Private
const getSessionById = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id)
      .populate({
        path: "questions",
        options: { sort: { isPinned: -1, createdAt: 1 } },
      })
      .exec();

    if (!session) {
      return res.status(404).json({
        success: false,
        message: "Session not found",
      });
    }

    res.status(200).json({ success: true, session });
  } catch (error) {
    res.status(500).send({ success: false, message: "Server Error." });
  }
};

//@desc  Get a session ID with populated questions
//route POST /api/sessions/:id
//@access Private
const getMySessions = async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .populate("questions");

    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).send({ success: false, message: "Server Error." });
  }
};

//@desc  delete a new session and its question
//route POST /api/sessions/:id
//@access Private
const deleteSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) {
      return res.status(404).json({
        success: false,
        message: "Session not found",
      });
    }

    //Check if the logged-in user owns this session
    if (session.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to delete this session",
      });
    }

    //First, delete all questions linked to this session
    await Question.deleteMany({ session: session._id });

    //Then, delete the session
    await session.deleteOne();

    res.status(200).json({
      message: "Session deleted Successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Server Error." });
  }
};

module.exports = {
  createSession,
  getSessionById,
  getMySessions,
  deleteSession,
};
