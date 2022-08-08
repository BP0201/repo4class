process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("./app");
let items = require('./fakeDb')

let poptart = { name: "poptart", price: 3.00 };

beforeEach(function() {
    items.push(poptart);
})

afterEach(() => {
    items.length = 0;
})


describe("GET /items", () => {
    test("Gets a list of items", async () => {
        const res = await request(app).get('/items')
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ items: [poptart] })
    })
})

describe("GET /items/:name", () => {
    test("Gets a single item by name", async () => {
        const res = await request(app).get(`/items/${poptart.name}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ item: poptart })
    })
})

describe("POST /items", () => {
    test("Creates a new item", async () => {
        const res = await request(app).post(`/items`).send({ name: "bagel", price: 1.00 })
        expect(res.statusCode).toBe(201)
        expect(res.body).toEqual({ added: {name: "bagel", price: 1.00}})
    })
})

describe("PATCH /items/:name", () => {
    test("Updates an existing item", async () => {
        const res = await request(app).patch(`/items/${poptart.name}`).send({ name: "eggs", price: 2.00 })
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ updated: { name: "eggs", price: 2.00 }})
    })
})

describe("DELETE /items/:name", () => {
    test("Deletes an item by name", async () => {
        const res = await request(app).delete(`/items/${poptart.name}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ message: "Deleted"})
    })
})