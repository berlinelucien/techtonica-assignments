import express from "express";
const router = express.Router();
import db from "../db/db-connection.js";

/* EVENT Route. */
// server/routes/events.mjs`
router.get("/", async function (req, res, next) {
  try {
    const events = await db.any("SELECT * FROM events", [true]);
    res.send(events);
  } catch (e) {
    return res.status(400).json({ e });
  }
})

// POST update information
router.post("/", async (req, res) => {
  const events = {
    name: req.body.name,
    date: req.body.date,
    description: req.body.description,
    category: req.body.category,
  };
  console.log(events);
  try {
    const createdEvents = await db.one(
      "INSERT INTO events(id, name, date, description, category) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [events.id, events.name, events.date, events.description, events.category]
    );
    console.log(createdEvents);
    res.send(createdEvents);
  } catch (e) {
    return res.status(400).json({ e });
  }
})

router.delete('/:id', async (req, res) => {
  // : acts as a placeholder
  const eventId = req.params.id;
  try {
    await db.none('DELETE FROM events WHERE id=$1', [eventId]);
    res.send({ status: 'success' });
  } catch (e) {
    return res.status(400).json({ e });
  }
})
// hardcode data
// let mockEvents = [
//   {
//     id: "1",
//     name: "Birthday",
//     date: "2021-09-01",
//     description: "A birthday party for my best friend",
//     category: "Celebration",
//   },
//   {
//     id: "2",
//     name: "Graduation",
//     date: "2021-08-01",
//     description: "The class of 2021 graduates from East High",
//     category: "Education",
//   },
//   {
//     id: "3",
//     name: "JS Study Session",
//     date: "2021-10-01",
//     description: "A chance to practice Javascript interview questions",
//     category: "Education",
//   }

// ]



export default router;
