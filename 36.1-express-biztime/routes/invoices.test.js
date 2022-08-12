process.env.NODE_ENV = "test"

const request = require('supertest');
const app = require('../app');
const db = require('../db');


let testInvoice;
beforeEach(async () => {
    const companyRes = await db.query(`INSERT INTO companies (code, name, description) VALUES ('tesla','Tesla','No.')`)
    const results = await db.query(`
        INSERT INTO invoices (
            comp_code, 
            amt, 
            paid, add_date,
            paid_date) VALUES ('tesla', 2000, false, null, null) RETURNING id, comp_code, amt, paid, add_date, paid_date`)
    testInvoice = results.rows[0]
})

afterEach(async () => {
    await db.query(`DELETE FROM companies`)
    await db.query(`DELETE FROM invoices`)
})

afterAll(async () => {
    await db.end()
})

describe('GET /invoices', () => {
    test('Should return a list with one invoice', async () => {
        const res = await request(app).get('/invoices')
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ invoices: [testInvoice] })
    })
})
describe("GET /invoices/:id", () => {
    test("Should return one invoice by id", async () => {
        const res = await request(app).get(`/invoices/${testInvoice.id}`)
        expect(res.statusCode).toBe(200)
    })
    test('Responds with 404 for invalid id', async () => {
        const res = await request(app).get(`/invoices/0`)
        expect(res.statusCode).toBe(404)
    })
})
describe("POST /invoices", () => {
    test("Create a single invoice", async () => {
        const res = await request(app).post(`/invoices`).send({comp_code: "tesla", amt: 100})
        expect(res.statusCode).toBe(201)
        expect(res.body).toEqual({ invoice: {"add_date": null,
            "amt": 2000,
             "add_date": "2022-08-12T04:00:00.000Z",
             "amt": 100,
              "comp_code": "tesla",
             "id": expect.any(Number),
              "paid": false,
              "paid_date": null} })
    })
})
describe("PUT /invoices/:id", () => {
    test('Update existing invoice', async () => {
        const res = await request(app).put(`/invoices/${testInvoice.id}`).send({ amt: 200, paid: false })
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ invoice: {"add_date": null,
         "amt": 200,
          "comp_code": "tesla",
         "id": expect.any(Number),
          "paid": false,
          "paid_date": null}})
    })
    test("Responds with 404 for invalid id", async () => {
        const res = await request(app).put(`/invoices/0`).send({amt: 70000})
        expect(res.statusCode).toBe(404)
    })
})
describe("DELETE /invoices/:id", () => {
    test("Delete a single invoice by id", async () => {
        const res = await request(app).delete(`/invoices/${testInvoice.id}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({message: "Deleted."})
    })
})
