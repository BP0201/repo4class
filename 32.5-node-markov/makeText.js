/** Command-line tool to generate Markov text. */
const fs = require('fs')
const process = require('process')
const markov = require('./markov')
const axios = require("axios")

function genText(text) {
    let mm = new markov.MarkovMachine(text)
    console.log(mm.makeText())
}


function makeFileText(path) {
    fs.readFile(path, 'utf8',(err, data) => {
        if (err) {
            console.error(`Cannot read file: ${path}: ${err}`)
            process.exit(1)
        } else {
            genText(data)
        }
    })
}


async function makeURLText(url) {
    let res;

    try {
        res = await axios.get(url)
    } catch (e) {
        console.error(`Cannot read URL: ${url}: ${e}`)
        process.exit(1)
    }
    genText(res.data)
}


let [ method, path ] = process.argv.slice(2)

if (method === 'file') {
    makeFileText(path)
}

else if (method === 'url') {
    makeURLText(path)
}

else {
    console.error(`Unknown method: ${method}`)
    process.exit(1)
}