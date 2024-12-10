document.getElementById('sign-in-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const painLevel = parseInt(document.getElementById('pain-level').value, 10);

    // Validate ID length and that it contains only numbers
    if (id.length !== 6 || isNaN(id)) {
        document.getElementById('error-message').style.display = 'block';
        return;
    }

    // Hide error message if the ID is valid
    document.getElementById('error-message').style.display = 'none';

    // Check if it's admin
    if (name === 'admin' && id === '123456') {
        // Show Admin View
        document.getElementById('sign-in').style.display = 'none';
        document.getElementById('admin-view').style.display = 'block';

        // Change the "Welcome Admin" text color to cyan
        document.getElementById('admin-welcome').style.color = 'cyan';

        // Fetch and display patient list
        fetch('/patients')
            .then(response => response.json())
            .then(data => {
                const patientList = document.getElementById('patient-list');
                patientList.innerHTML = '';  // Clear current list
                data.patients.forEach(patient => {
                    const li = document.createElement('li');
                    li.textContent = `${patient.name} (ID: ${patient.id}, Pain Level: ${patient.painLevel}) - Wait Time: ${patient.waitTime} minutes`;
                    patientList.appendChild(li);
                });
            })
            .catch(err => console.error('Error:', err));

    } else {
        // Show Patient View
        document.getElementById('sign-in').style.display = 'none';
        document.getElementById('patient-view').style.display = 'block';

        // Change the "Welcome" text color to cyan
        document.getElementById('patient-welcome').style.color = 'cyan';

        // Add the patient to the queue and calculate wait time
        const patientData = { name, id, painLevel };
        fetch('/add-patient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patientData)
        })
        .then(response => response.json())
        .then(data => {
            const waitTime = data.waitTime;
            document.getElementById('wait-time').textContent = `Wait Time: ${waitTime} minutes`;

            // Calculate and display number of patients ahead based on pain level
            const higherPainPatients = patients.filter(p => p.painLevel > painLevel); // Higher pain level patients
            const sameLevelPatientsAhead = patients.filter(p => p.painLevel === painLevel && p.signInOrder < patientData.signInOrder); // Same level patients ahead, based on sign-in order
            const totalPatientsAhead = higherPainPatients.length + sameLevelPatientsAhead.length;

            document.getElementById('patients-ahead').textContent = `Patients ahead: ${totalPatientsAhead}`;
        })
        .catch(err => console.error('Error:', err));
    }
});
