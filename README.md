# 💼 InterviewPrepAI – Smart AI-Powered Interview Preparation App

InterviewPrepAI is a full-stack web application designed to help users prepare for technical interviews using AI. Built with the MERN stack and powered by Gemini AI, this app generates personalized interview question-answer sets based on selected job roles and experience levels.

---

## 🚀 Features

- 🔐 **JWT Authentication:** Secure user registration & login flow.
- 🎯 **Role-Based Sessions:** Create sessions by selecting job role and years of experience.
- 🤖 **AI-Generated Q&A:** Get 10 technical questions and answers from Gemini AI.
- 📌 **Pin Questions:** Highlight important Q&A by pinning them to the top.
- 🧠 **Learn More:** Generate deeper explanations for questions on demand.
- 🗂️ **Session Management:** All sessions and responses are stored in MongoDB for future access.
- 💻 **Responsive UI:** Built with React.js and Tailwind CSS for a smooth user experience.

---

## 🛠 Tech Stack

| Frontend      | Backend          | AI & Tools         | Database        |
|---------------|------------------|--------------------|-----------------|
| React.js      | Node.js          | Gemini AI (via `@google/genai`) | MongoDB (Atlas) |
| Tailwind CSS  | Express.js       | Multer (Image Upload) | Mongoose        |
| Axios         | JWT Auth         |                    |                 |

---

#Create a .env file inside /backend:
PORT=8000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API=your_gemini_api_key





