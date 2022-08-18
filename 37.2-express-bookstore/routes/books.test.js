process.env.NODE_ENV = "test"

const request = require("supertest")
const app = require("../app")
const db = require("../db")


let postBook = {
    "isbn": "123",
    "amazon_url": "amazon.com",
    "author": "JK Rowling",
    "language": "english",
    "pages": 200,
    "publisher": "Penguinz",
    "title": "The Maze Runner",
    "year": 2022
}

let testBook;
beforeEach(async () => {
    const results = await db.query(`
        INSERT INTO books 
        (isbn, amazon_url, author, language, pages, publisher, title, year) VALUES 
        ("123456789", "amazon.com", "Harley Quinn", "english", 100, "Publishing Co", "Hunger Games", 2022)
        RETURNING isbn, author, title`)
        testBook = results.rows[0]
})

afterEach(async () => {
    await db.query(`DELETE FROM books`)
})

afterAll(async () => {
    await db.end()
})

describe("GET /books", () => {
    test("Responds with a list of all books in db", async () => {
        const res = await request(app).get('/books')
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual([testBook])
    })
})

describe("GET /books/:isbn", () => {
    test("Responds with a single book via isbn", async () => {
        const res = await request(app).get(`/books/${testBook.isbn}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({testBook})
    })
    test("Responds with 404 for invalid isbn", async () => {
        const res = await request(app).get('/books/0')
        expect(res.statusCode).toBe(404)
    })
})

describe("POST /books", () => {
    test("Creates a new book", async () => {
        const res = await request(app).post('/books').send({postBook})
        expect(res.statusCode).toBe(201)
        expect(res.body).toEqual({postBook})
    })
    test("Throws error for incomplete input", async () => {
        const res = await request(app).post('/books').send({title: "hi"})
        expect(res.statusCode).toBe(400)
    })
    test("Throws error for invalid input", async () => {
        const res = await request(app).post('/books').send({pages: "stringy"})
        expect(res.statusCode).toBe(400)
    })
})

describe("PUT /books/:isbn", () => {
    test("Updates an existing book", async () => {
        const res = await request(app).put(`/books/${testBook.isbn}`).send({title: "monkey banana"})
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual(expect.anyObject({title: "monkey banana"}))
    })
})

describe("DELETE /books/:isbn", () => {
    test("Deletes a book", async () => {
        const res = await request(app).delete(`/books/${testBook.isbn}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ message: "Book deleted" })
    })
})
