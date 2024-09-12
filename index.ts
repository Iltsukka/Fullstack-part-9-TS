import express from 'express';
import calculateBmi from './bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const weight = Number(req.query.weight)
  const height = Number(req.query.height)
  console.log(weight, height)
  if (weight && height && Object.keys(req.query).length === 2) {
    const bmi = calculateBmi(height, weight)
    res.json({weight: weight, height: height, bmi: bmi})
  } else {
    res.status(400).send({error: 'invalid parameters'})
  }
 
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});