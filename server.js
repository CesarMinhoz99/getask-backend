const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa o pacote cors
const { insertJob, getAllJobs, getJobByHash, updateJob, deleteJob, getJobsByCity } = require('./db'); // Importa as funções necessárias

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Habilita CORS para todas as rotas
app.use(bodyParser.json()); // Middleware para analisar JSON

// Rota para criar um novo trabalho
app.post('/api/jobs/set', (req, res) => {
    const { companyName, jobName, cidade, description, valor, contato, hash } = req.body;

    // Validação simples
    if (!companyName || !jobName || !cidade || !description || !valor || !contato || !hash) {
        return res.status(400).send({ message: 'Todos os campos são obrigatórios.' });
    }

    const newJob = { companyName, jobName, cidade, description, valor, contato, hash };

    // Inserir dados no banco de dados usando a função insertJob
    insertJob(newJob, (err, insertId) => {
        if (err) {
            return res.status(500).send({ message: 'Erro ao criar vaga.' });
        }
        console.log('Nova Vaga Inserida:', { id: insertId, ...newJob });
        res.status(201).send({ message: 'Vaga criada com sucesso!', job: { id: insertId, ...newJob } });
    });
});

// Rota para obter todas as vagas
app.get('/api/jobs/getAll', (req, res) => {
    getAllJobs((err, jobs) => {
        if (err) {
            return res.status(500).send({ message: 'Erro ao obter vagas.' });
        }
        // Remove o campo hash de cada vaga antes de enviar
        const filteredJobs = jobs.map(({ hash, ...rest }) => rest);
        res.send(filteredJobs);
    });
});

// Rota para obter uma vaga específica pelo hash
app.get('/api/jobs/getByHash/:hash', (req, res) => {
    const jobHash = req.params.hash;

    getJobByHash(jobHash, (err, job) => {
        if (err) {
            return res.status(500).send({ message: 'Erro ao buscar vaga.' });
        }

        if (!job) {
            return res.status(404).send({ message: 'Vaga não encontrada.' });
        }

        // Retorna a vaga sem o campo hash
        const { hash, ...jobWithoutHash } = job;
        res.status(200).send(jobWithoutHash);
    });
});

// Rota para editar uma vaga existente
app.put('/api/jobs/edit/:hash', (req, res) => {
    const jobHash = req.params.hash;
    const { companyName, jobName, cidade, description, valor, contato } = req.body;

    // Validação simples
    if (!companyName || !jobName || !cidade || !description || !valor || !contato) {
        return res.status(400).send({ message: 'Todos os campos são obrigatórios.' });
    }

    const updatedJob = { companyName, jobName, cidade, description, valor, contato };

    // Atualizar dados no banco de dados usando a função updateJob
    updateJob(jobHash, updatedJob, (err) => {
        if (err) {
            return res.status(500).send({ message: 'Erro ao atualizar vaga.' });
        }
        res.status(200).send({ message: 'Vaga atualizada com sucesso!' });
    });
});

// Rota para excluir uma vaga
app.delete('/api/jobs/delete/:hash', (req, res) => {
    const jobHash = req.params.hash;

    // Deletar vaga do banco de dados usando a função deleteJob
    deleteJob(jobHash, (err) => {
        if (err) {
            return res.status(500).send({ message: 'Erro ao deletar vaga.' });
        }
        res.status(200).send({ message: 'Vaga deletada com sucesso!' });
    });
});

// Rota para obter vagas por cidade
app.get('/api/jobs/getByCity/:city', (req, res) => {
    const city = req.params.city;

    // Chama a função no db para obter empregos pela cidade
    getJobsByCity(city, (err, jobs) => {
        if (err) {
            return res.status(500).send({ message: 'Erro ao buscar vagas pela cidade.' });
        }

        // Remove o campo hash de cada vaga antes de enviar
        const filteredJobs = jobs.map(({ hash, ...rest }) => rest);
        res.send(filteredJobs);
    });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
