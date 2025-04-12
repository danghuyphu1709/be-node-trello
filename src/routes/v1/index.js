import express from 'express';
const router = express.Router();

router.get('/check', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

export const v1Routes = router;