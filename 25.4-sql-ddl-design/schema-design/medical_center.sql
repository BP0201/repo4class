DROP DATABASE IF EXISTS medical_center;

CREATE DATABASE medical_center;

\c medical_center


CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE diagnostics (
    id SERIAL PRIMARY KEY,
    patient_id INTEGER REFERENCES patients ON DELETE CASCADE,
    doctor_id INTEGER REFERENCES doctors ON DELETE CASCADE,
    diagnosis TEXT DEFAULT 'No issues'
);



INSERT INTO doctors (name) VALUES ('Scott'), ('Lang'), ('Cheryl');

INSERT INTO patients (name) VALUES ('Matt'), ('Steve'), ('Luca');

INSERT INTO diagnostics (patient_id, doctor_id, diagnosis) VALUES
(1, 1, 'Cancer'), (1,2, 'Cancer'), (2,3, 'Looks great.');

INSERT INTO diagnostics (patient_id, doctor_id) VALUES
(3, 2);

