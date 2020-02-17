const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get('/api/accounts', (req, res) =>
{
    db('accounts')
    .then(accounts =>
    {
        res.status(200).json(accounts);
    })
    .catch(error =>
    {
        res.status(500).json({error: 'Could not retrieve Accounts from the database'});
    })
})

server.use('/', (req, res) =>
{
    res.json({message: 'API is running'});
})

module.exports = server;