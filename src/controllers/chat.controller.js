exports.chat = async (req, res) => {
  const { message } = req.body;

  // Later: connect AI / underwriting logic
  res.json({
    reply: `Echo: ${message}`,
    stage: "verification",
  });
};
