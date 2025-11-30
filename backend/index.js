const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))

const PORT = process.env.PORT || 5000;

const insightsRoutes = require('./routes/insightsRoutes');
app.use('/api/user/insights', insightsRoutes);

app.use('/', (req, res) => {
    res.send('Love Hue Backend Running')
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})

module.exports = app;
