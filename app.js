const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.use(express.static('dist'))
app.get(/.*/, (_req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`)
})

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

start()
