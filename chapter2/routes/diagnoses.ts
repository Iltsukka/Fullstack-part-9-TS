import express from 'express';
import { Response } from 'express';
import { getDiagnoses } from '../controllers/diagnosesController';
import { Diagnosis } from '../types';

const router = express.Router();

router.get('/', (_req, res: Response<Diagnosis[]>) => {
    const diagnoses = getDiagnoses();
    res.json(diagnoses);
});

export default router;