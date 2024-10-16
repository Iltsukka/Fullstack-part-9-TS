import express from 'express';
import { Response } from 'express';
import { getPatientsNoSsn } from '../controllers/patientsController';
import { PatientNoSSN } from '../types';


const router = express.Router();

router.get("/", (_req, res: Response<PatientNoSSN[]>) => {
    const patients = getPatientsNoSsn();
    res.json(patients);

});

export default router;