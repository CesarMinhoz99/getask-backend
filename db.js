require('dotenv').config();
const { Pool } = require('pg');

// Configurações de conexão com o banco de dados PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,      // Seu usuário PostgreSQL
    host: process.env.DB_HOST,        // Host do banco de dados
    database: process.env.DB_DATABASE, // Nome do banco de dados
    password: process.env.DB_PASSWORD, // Senha do seu usuário
    port: process.env.DB_PORT,        // Porta padrão do PostgreSQL
});

// Função para inserir um novo trabalho
const insertJob = (job, callback) => {
    const sql = 'INSERT INTO jobs (companyname, jobname, cidade, description, valor, contato, hash) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id';
    pool.query(sql, [job.companyName, job.jobName, job.cidade, job.description, job.valor, job.contato, job.hash], (err, result) => {
        if (err) {
            console.error('Erro ao inserir dados no banco de dados:', err);
            return callback(err, null);
        }
        callback(null, result.rows[0].id);  // Retorna o ID inserido
    });
};

// Função para buscar todos os trabalhos
const getAllJobs = (callback) => {
    const sql = 'SELECT companyname, jobname, cidade, description, valor, contato, hash FROM jobs';
    pool.query(sql, (err, results) => {
        if (err) {
            console.error('Erro ao obter vagas:', err);
            return callback(err, null);
        }
        callback(null, results.rows);  // Retorna todos os registros
    });
};

// Função para buscar um trabalho pelo hash
const getJobByHash = (hash, callback) => {
    const sql = 'SELECT companyname, jobname, cidade, description, valor, contato, hash FROM jobs WHERE hash = $1';
    pool.query(sql, [hash], (err, results) => {
        if (err) {
            console.error('Erro ao buscar vaga pelo hash:', err);
            return callback(err, null);
        }

        if (results.rows.length === 0) {
            return callback(null, null);  // Nenhum trabalho encontrado
        }

        callback(null, results.rows[0]);  // Retorna o primeiro resultado
    });
};

// Função para atualizar um trabalho existente
const updateJob = (hash, job, callback) => {
    const sql = 'UPDATE jobs SET companyname = $1, jobname = $2, cidade = $3, description = $4, valor = $5, contato = $6 WHERE hash = $7';
    pool.query(sql, [job.companyName, job.jobName, job.cidade, job.description, job.valor, job.contato, hash], (err, result) => {
        if (err) {
            console.error('Erro ao atualizar dados no banco de dados:', err);
            return callback(err);
        }
        callback(null);
    });
};

// Função para deletar um trabalho
const deleteJob = (hash, callback) => {
    const sql = 'DELETE FROM jobs WHERE hash = $1';
    pool.query(sql, [hash], (err, result) => {
        if (err) {
            console.error('Erro ao deletar dados do banco de dados:', err);
            return callback(err);
        }
        callback(null);
    });
};

// Função para buscar trabalhos pela cidade
const getJobsByCity = (city, callback) => {
    const sql = 'SELECT companyname, jobname, cidade, description, valor, contato, hash FROM jobs WHERE cidade ILIKE $1';
    pool.query(sql, [`%${city}%`], (err, results) => {
        if (err) {
            console.error('Erro ao buscar vagas pela cidade:', err);
            return callback(err, null);
        }
        callback(null, results.rows);  // Retorna todos os registros encontrados
    });
};

// Exportar as funções
module.exports = {
    insertJob,
    getAllJobs,
    getJobByHash,
    updateJob,
    deleteJob,
    getJobsByCity // Certifique-se de que está aqui
};
