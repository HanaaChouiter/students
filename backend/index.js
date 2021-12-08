const express = require("express")
const app = express()
const port = 5000
const bodyparser = require("body-parser")
const cors = require("cors")

app.use(cors())

let students = require("./students.json")

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.get("/students", (req, res) => {
    res.json(students)
  })

app.post("/students", (req, res) => {
    const student = {
        ...req.body,
       }
    
      students = [...students, student]
    
      res.json(student)
    })
 

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })