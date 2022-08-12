process.env.NODE_ENV = "test"

const request = require('supertest');
const app = require('../app');
const db = require('../db');


let testCompany;
beforeEach(async () => {
    const results = await db.query(`
        INSERT INTO companies (code, name, description) VALUES ('tesla', 'Tesla', 'The future of transportation.') RETURNING code, name, description`)
    testCompany = results.rows[0]
})

afterEach(async () => {
    await db.query(`DELETE FROM companies`)
})

afterAll(async () => {
    await db.end()
})

describe('GET /companies', () => {
    test('Should return a list of all companies in db', async () => {
        const res = await request(app).get('/companies')
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ companies: [testCompany] })
    })
})
describe('GET /companies/:code', () => {
    test('Should return one company by code', async () => {
        const res = await request(app).get(`/companies/${testCompany.code}`)
        expect(res.statusCode).toBe(200)
    })
    test('Responds with 404 for invalid company code', async () => {
        const res = await request(app).get(`/companies/0`)
        expect(res.statusCode).toBe(404)
    })
})
describe('POST /companies', () => {
    test('Create a new company', async () => {
        const res = await request(app).post(`/companies`).send({name: "Crumbl Cookies", description: "No"})
        expect(res.statusCode).toBe(201)
        expect(res.body).toEqual({company: [{name: "Crumbl Cookies", code: "crumbl-cookies", description: "No"}]})
    })
})
describe('PUT /companies/:code', () => {
    test('Update existing company', async () => {
        const res = await request(app).put(`/companies/${testCompany.code}`).send({name: "Tezla", description: "Tezlaaaa"})
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({company: {name: "Tezla", code: "tesla", description: "Tezlaaaa"}})
    })
    test('Responds with 404 for invalid code', async () => {
        const res = await request(app).put(`/companies/0`).send({name: "Tezla", description: "Tezlaaaa"})
        expect(res.statusCode).toBe(404)
    })
})
describe("DELETE /companies/:code", () => {
    test('Should delete a company by code', async () => {
        const res = await request(app).delete(`/companies/${testCompany.code}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({message: "Deleted."})
    })
})
