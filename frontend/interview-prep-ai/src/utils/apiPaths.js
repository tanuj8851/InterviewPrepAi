export const BASE_URL = "https://interviewprepai-2uzu.onrender.com";

export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register", //signup
    LOGIN: "/api/auth/login", //Authenicate user & return JWT Token
    GET_PROFILE: "/api/auth/profile", //Get logged-in user details
  },
  IMAGE: {
    UPLOAD_IMAGE: "/api/auth/upload-image", //Upload Profile Image
  },
  AI: {
    GENERATE_QUESTIONS: "/api/ai/generate-questions", //Generate interview questions ans answers using gemini ai
    GENERATE_EXPLANATION: "/api/ai/generate-explanation", //Generate concept explanation using gemini
  },
  SESSION: {
    CREATE: "/api/sessions/create", //Create a new interview session with questions
    GET_ALL: "/api/sessions/my-sessions", //get all user sessions
    GET_ONE: (id) => `/api/sessions/${id}`, //Get session details with questions
    DELETE: (id) => `/api/sessions/${id}`, //Delete a session
  },
  QUESTION: {
    ADD_TO_SESSION: "/api/questions/add", //Add more question to a session
    PIN: (id) => `/api/questions/${id}/pin`, //Pin or Unpin a question
    UPDATE_NOTE: (id) => `/api/questions/${id}/note`, //Update/Add a note to a question
  },
};
