const express = require('express');

const pessoasRoute = require('./pessoasRoute');

module.exports = app => {
    app.use(express.json());
    app.use(pessoasRoute);
};
