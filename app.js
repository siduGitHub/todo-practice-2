/*const express = require('express')
const app = express()
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const path = require('path')
app.use(express.json()
)
const dbPath = path.join(__dirname, 'todoApplication.db')
let db = null

const initializeDbAndServer = async () => {
  try {
    db = await open({
      finename: dbPath,
      driver: sqlite3.Database,
    })
    app.listen(3000, () =>
      console.log('Server running at http://localhost:3000/'),
    )
  } catch (e) {
    console.log(`DB error${e.message}`)
    process.exit(1)
  }
}
initializeDbAndServer()*/

const express = require('express') //const express = require('express')
const path = require('path') //const path = require('path')
const sqlite3 = require('sqlite3') //const sqlite3 = require('sqlite3')
const {open} = require('sqlite') //const {open} = require('sqlite')
const app = express() //const app = express()
app.use(express.json()) //app.use(express.json()

const dbPath = path.join(__dirname, 'todoApplication.db') //const dbPath = path.join(__dirname, 'todoApplication.db')
let db = null //let db = null
const initializeDBAndServer = async () => {
  //const initializeDbAndServer = async () => {
  try {
    //try {
    db = await open({
      //db = await open({
      filename: dbPath, //finename: dbPath,
      driver: sqlite3.Database, //driver: sqlite3.Database,
    })
    app.listen(3000, () =>
      console.log('Serer Running at http://localhost:3000/'),
    )
  } catch (e) {
    console.log(`DB Erro${e.message}`)
    process.exit(1)
  }
}
initializeDBAndServer()

//API1
app.get('/todos/', async (request, response) => {
  const {status} = request.query
  console.log(status)
  let getQuery = null

  const hasStatus = requestQuery => {
    console.log(requestQuery.status)
    return requestQuery.status !== undefined
  }

  switch (true) {
    case hasStatus(request.query):
      getQuery = `
      SELECT * FROM todo WHERE status="${status}"
    `
      break
    default:
      console.log('hi')
  }

  const dbResponse = db.all(getQuery)
  response.send(dbResponse)
})
