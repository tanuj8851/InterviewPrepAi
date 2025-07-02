const errorHandler = (err, req, res, next) => {
  console.error("🔥 ERROR LOG:");
  console.error("👉 Route:", req.originalUrl);
  console.error("👉 Method:", req.method);
  console.error("👉 Message:", err.message);
  console.error("👉 Stack:", err.stack);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    path: req.originalUrl,
    method: req.method,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

module.exports = errorHandler;
