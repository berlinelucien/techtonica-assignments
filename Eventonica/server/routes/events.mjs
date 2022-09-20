import express from "express";
const router = express.Router();

/* EVENT Route. */
// server/routes/events.mjs`
router.get('/', function (req, res, next) {
  console.log(req.body,'the body')
  res.json({events: mockEvents})
});

// hardcode data
let mockEvents = [
  {
    id: "1",
    name: "Birthday",
    date: "2021-09-01",
    description: "A birthday party for my best friend",
    category: "Celebration",
  },
  {
    id: "2",
    name: "Graduation",
    date: "2021-08-01",
    description: "The class of 2021 graduates from East High",
    category: "Education",
  },
  {
    id: "3",
    name: "JS Study Session",
    date: "2021-10-01",
    description: "A chance to practice Javascript interview questions",
    category: "Education",
  }

]









export default router;
