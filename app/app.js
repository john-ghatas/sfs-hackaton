import express from 'express'
import routes from './routes'
const PORT = 4000

// Initializing the server
const server = express()

// Getting all routes and applying them
Object.entries(routes).forEach(([key, value]) => {
    server.use(key, value)
})

// Running the server
server.listen(PORT, server => {
    console.log(`Backend is running on port ${PORT}.`)
})
