import express from 'express';
import calculateBmi from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const weight = Number(req.query.weight);
  const height = Number(req.query.height);
  console.log(weight, height);
  if (weight && height && Object.keys(req.query).length === 2) {
    const bmi = calculateBmi(height, weight);
    res.json({weight: weight, height: height, bmi: bmi});
  } else {
    res.status(400).send({error: 'invalid parameters'});
  }
 
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {daily_exercises, target} = req.body;
  if (!daily_exercises || !target) {
    res.status(400).send({error: 'request data was invalid'});
  }
  else if (!Array.isArray(daily_exercises)) {
    res.status(400).send({error: 'request does not contain an array of exercises'});

  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  else if (!daily_exercises.every((exercise: any) => typeof exercise === 'number')) {
    res.status(400).send({error: 'array of exercises contains other than just numbers'});
  } else {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const feedback = calculateExercises(daily_exercises, target);
  res.json(feedback);
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

