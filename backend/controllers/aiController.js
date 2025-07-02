const { GoogleGenAI } = require("@google/genai");
const {
  conceptExplainPrompt,
  questionAnswerPrompt,
} = require("../utils/prompts");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// @desc  Generate interview questions and answer using Gemini
// @route POST /api/ai/generate-questions
// @access Private

const generateInterviewQuestions = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, numberofQuestions } = req.body;

    if (!role || !experience || !topicsToFocus || !numberofQuestions) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const prompt = questionAnswerPrompt(
      role,
      experience,
      topicsToFocus,
      numberofQuestions
    );
    console.log(prompt);

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });

    let rawText = response.text;

    //Clean it:Remove ```json and ``` from beginning and end
    const cleanedText = rawText
      .replace(/^```json\s*/, "") //remove starting ```json
      .replace(/```$/, "") //remove ending ```
      .trim();

    //Now safe to parse
    const data = JSON.parse(cleanedText);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to Generate questions",
      error: error.message,
    });
  }
};

// @desc  Generate explains a interview question
// @route POST /api/ai/generate-explanation
// @access Private

const generateConceptExplanationQuestions = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const prompt = conceptExplainPrompt(question);

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });

    let rawText = response.text;

    //Clean it:Remove ```json and ``` from beginning and end
    const cleanedText = rawText
      .replace(/^```json\s*/, "") //remove starting ```json
      .replace(/```$/, "") //remove ending ```
      .trim();

    //Now safe to parse
    const data = JSON.parse(cleanedText);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to Generate questions Explanations",
      error: error.message,
    });
  }
};

module.exports = {
  generateConceptExplanationQuestions,
  generateInterviewQuestions,
};
