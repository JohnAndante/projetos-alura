/* eslint-disable no-unused-expressions */
import { after, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app.js';
import db from '../../db/dbconfig.js';

chai.use(chaiHttp);
const { expect } = chai;

after(async () => {
    await db.destroy();
});

describe('GET em /eventos', () => {
    it('GET /eventos - deve retornar todos os eventos', async () => {
        const resultado = await chai.request(app).get('/eventos');
        expect(resultado.status).to.be.equal(200);
        expect(resultado.body).to.be.an('array');
        expect(resultado.body[0]).to.have.property('id');
        expect(resultado.body[0]).to.have.property('nome');
        expect(resultado.body[0]).to.have.property('descricao');
        expect(resultado.body[0]).to.have.property('data');
        expect(resultado.body[0]).to.have.property('autor_id');
        expect(resultado.body[0]).to.have.property('created_at');
        expect(resultado.body[0]).to.have.property('updated_at');
    });

    it('GET /eventos - deve retornar um evento específico', async () => {
        const resultado = await chai.request(app).get('/eventos/1');
        expect(resultado.status).to.be.equal(200);
        expect(resultado.body).to.be.an('object');
        expect(resultado.body).to.have.property('id');
        expect(resultado.body).to.have.property('nome');
        expect(resultado.body).to.have.property('descricao');
        expect(resultado.body).to.have.property('data');
        expect(resultado.body).to.have.property('autor_id');
        expect(resultado.body).to.have.property('created_at');
        expect(resultado.body).to.have.property('updated_at');
    });

    it('GET /eventos - deve retornar 404 para um evento inexistente', async () => {
        const resultado = await chai.request(app).get('/eventos/999');
        expect(resultado.status).to.be.equal(404);
        expect(resultado.body).to.be.an('object');
        expect(resultado.body).to.have.property('message');
    });
});
