import express from "express"

const app = express()

app.get('/api/health-check', (req, res) => {
  res.status(200).send("ok!")
});

app.listen(3000, () => console.log("Serve is running"))