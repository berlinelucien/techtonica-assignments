import express from "express";
const router = express.Router();

/* EVENT PAGE. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is my events route.' });
});

export default router;
