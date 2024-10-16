import { PatientNoSSN } from "../types";
import patients from "../data/patients";

export const getPatientsNoSsn = () :PatientNoSSN[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));

};