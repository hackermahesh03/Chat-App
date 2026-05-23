const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// Send message
router.post("/", async (req, res) => {
  const { content } = req.body;

  try {
    const message = new Message({ content });
    await message.save();
    res.json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get messages
router.get("/", async (req, res) => {
  const messages = await Message.find().sort({ timestamp: 1 });
  res.json(messages);
});

// Delete for everyone
router.put("/:id/delete", async (req, res) => {
  await Message.findByIdAndUpdate(req.params.id, {
    isDeleted: true,
  });
  res.json({ message: "Deleted for everyone" });
});

// Pin message
router.put("/:id/pin", async (req, res) => {
  const msg = await Message.findById(req.params.id);
  msg.isPinned = !msg.isPinned;
  await msg.save();
  res.json(msg);
});

module.exports = router;