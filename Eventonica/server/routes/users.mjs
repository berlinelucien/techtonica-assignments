import express from "express";
const router = express.Router();

/* GET users listing. */
// server/routes/users.mjs`
router.get('/', function (req, res, next) {
  console.log(req.body, 'the body');
  res.json({ users: mockUsers });
});


let mockUsers = [
  { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
  { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
  { id: 3, name: 'Dory', email: 'dory@gmail.com' }
];

export default router;
