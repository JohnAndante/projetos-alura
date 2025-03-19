const express = require('express');

const pessoasRoute = require('./pessoasRoute');
const categoriasRoute = require('./categoriasRoute');
const cursosRoute = require('./cursosRoute');
const matriculasRoute = require('./matriculasRoute');

module.exports = app => {
    app.use(express.json());
    app.use(pessoasRoute);
    app.use(categoriasRoute);
    app.use(cursosRoute);
    app.use(matriculasRoute);
};
