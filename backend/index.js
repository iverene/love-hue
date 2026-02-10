const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

app.set('trust proxy', 1); 

app.use(express.json());

app.use(cors({
    origin: ["http://localhost:5173", "https://love-hue.vercel.app"],
    credentials: true
}));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 20, 
    message: { error: "Too many requests, please try again later." },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use('/api/user/insights', limiter); 

const PORT = process.env.PORT || 5000;
const insightsRoutes = require('./routes/insightsRoutes');
app.use('/api/user/insights', insightsRoutes);

app.use('/', (req, res) => {
    res.send('Love Hue Backend Running');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;