const express = require('express')
const router = new express.Router()
const itemsDb = require('./fakeDb')


router.get('/', (req, res) => {
    res.json({ items: itemsDb })
})

router.get('/:name', (req, res) => {
    const item = itemsDb.find(i => i.name === req.params.name)
    res.json({ item })
})

router.post('/', (req, res) => {
    const newItem = { name: req.body.name, price: req.body.price }
    itemsDb.push(newItem)
    res.status(201).json({ added: newItem })
})

router.patch('/:name', (req, res) => {
    const foundItem = itemsDb.find(i => i.name === req.params.name)
    foundItem.name = req.body.name
    foundItem.price = req.body.price
    res.json({ updated: foundItem })
})

router.delete('/:name', (req, res) => {
    const foundItem = itemsDb.findIndex(i => i.name === req.params.name)
    itemsDb.splice(foundItem, 1)
    res.json({ message: "Deleted" })
})

module.exports = router