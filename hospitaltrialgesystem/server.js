const express = require('express');
const app = express();
const port = 9000;

app.use(express.static('public'));  // Serve static files from the 'public' folder
app.use(express.json());

// Store patients in memory
let patients = [];
let patientCounter = 0;  // To track the sign-in order

// Admin endpoint to get patient list
app.get('/patients', (req, res) => {
    res.json({ patients });
});

// Endpoint to add a patient and calculate wait time
app.post('/add-patient', (req, res) => {
    const { name, id, painLevel } = req.body;

    // Calculate the wait time for this patient
    let waitTime = 0;

    // Get the count of patients with higher pain level ahead of this patient
    const patientsAhead = patients.filter(patient => patient.painLevel > painLevel); // Patients with higher pain level
    const sameLevelPatients = patients.filter(patient => patient.painLevel === painLevel); // Patients with same pain level

    // The patient's wait time is calculated based on how many patients are ahead of them
    waitTime = (patientsAhead.length + sameLevelPatients.length) * 10; // 10 minutes per patient ahead

    // Create the patient object and add a sign-in order
    const patient = { name, id, painLevel, waitTime, signInOrder: patientCounter++ };

    // Add the new patient to the list
    patients.push(patient);

    // Sort patients by pain level (highest first), then by sign-in order (first-come, first-served)
    patients.sort((a, b) => {
        if (b.painLevel === a.painLevel) {
            return a.signInOrder - b.signInOrder; // Sort by sign-in time for same pain level
        }
        return b.painLevel - a.painLevel; // Higher pain level comes first
    });

    res.json({ success: true, waitTime });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
