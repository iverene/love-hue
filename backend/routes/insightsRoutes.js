const express = require('express');
const router = express.Router();
const { generateInsights } = require('../middleware/insightsGenerator');

router.post('/', async (req, res) => {
    try {
        const { answers } = req.body;
        if (!answers) {
            return res.status(400).json({ error: "answers are required" });
        }

        const insights = await generateInsights(answers);
        return res.status(200).json(insights);
    } catch (error) {
        console.error("Insights Error:", error);
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
