# **Hospital Triage System**

## **Overview**
This application simulates an **emergency room triage system** where patients can sign in, view their estimated **wait time**, and see how many **patients are ahead of them** in the queue based on their **pain level**. The application allows **admins** to view the list of all patients, their pain levels, and wait times. **Patients** are queued based on their **pain tolerance**, with those having a **higher pain level** being prioritized. Patients with the **same pain level** are ordered by their **sign-in time**.

---

## **Features**
- **Admin View**:
  - Displays the list of patients.
  - Shows patient details including **name**, **ID**, **pain level**, and **wait time**.
  
- **Patient View**:
  - Displays the patient's **wait time**.
  - Shows the **number of patients ahead** based on **pain level** and **sign-in time**.

- **Wait Time Calculation**:
  - Patients with **higher pain levels** are prioritized.
  - Patients with the **same pain level** are ordered based on when they signed in.
  - **Wait time** is calculated based on the number of **patients ahead**.

---

## **Technologies Used**
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Data Storage**: In-memory array (patients are stored temporarily)

---
