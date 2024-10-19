# Getask Backend - Node.js API for Job Management

🚀 **About the Backend**

The Getask backend is an API built with Node.js and Express, designed to manage job listings for the Getask platform. It provides functionality to create, edit, delete, and fetch job opportunities efficiently. The API integrates with a database to store and manage job data.

## Features

- **Create Job Postings:** Add job opportunities with details such as job title, description, salary, contact info, and a unique hash.
- **Edit Job Postings:** Update existing job postings by using the unique hash.
- **Delete Job Postings:** Securely remove job postings using the unique hash.
- **Fetch Job Listings:** Retrieve all job postings or filter by city.
- **Fetch Job by Hash:** Find specific job postings using their unique hash.

## API Endpoints

- `POST /api/jobs/set` – Create a new job posting.
- `GET /api/jobs/getAll` – Retrieve all job postings.
- `GET /api/jobs/getByHash/:hash` – Retrieve a specific job posting by its hash.
- `PUT /api/jobs/edit/:hash` – Edit an existing job posting by its hash.
- `DELETE /api/jobs/delete/:hash` – Delete a job posting by its hash.
- `GET /api/jobs/getByCity/:city` – Retrieve job postings filtered by city.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Postgresql](https://www.postgresql.org/) (or other databases)
- [Cors](https://www.npmjs.com/package/cors) for Cross-Origin Resource Sharing
- [Body-Parser](https://www.npmjs.com/package/body-parser) to handle JSON requests

## Setup Instructions

1. Clone this repository.
   ```bash
   git clone https://github.com/your-username/getask-backend.git
