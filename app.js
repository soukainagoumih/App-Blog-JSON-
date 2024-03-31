const express = require('express')
const router = require('./routes/postRoutes')


const mongoose = require('mongoose')



mongoose.connect('mongodb://localhost:27017/blog_app')
.then(() => {console.log('Database conneccted successfully')})
.catch(() => {console.log('connection failed')})


const app = express()
const PORT = 3000

app.use(express.json());


app.use("/post", router)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})