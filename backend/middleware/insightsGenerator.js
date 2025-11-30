const axios = require('axios');

async function generateInsights(answers) {
    const key = process.env.OPENAI_API_KEY;
    if (!key) throw new Error('OPENAI API key not configured');

    const prompt = `
You are a professional relationship and emotional psychology expert. Analyze the quiz answers and generate an in-depth love expression profile. Do NOT limit insights to the traditional five love languages (Words of Affirmation, Quality Time, Acts of Service, Gift Giving, Physical Touch). You must go beyond by also identifying hidden patterns, attachment tendencies, emotional needs, boundaries, communication style, and unique expressions of affection.

USER ANSWERS:
${JSON.stringify(answers, null, 2)}

CRITICAL: You MUST respond with ONLY a JSON object in this EXACT structure. All values must be plain text, NOT nested JSON:

{
  "loveProfile": "Provide a poetic but practical summary of how this person gives and receives love, as plain text only",
  "primaryLoveStyle": "Explain their dominant love expressions and emotional patterns, beyond the 5 love languages, as plain text only",
  "secondaryLoveStyle": "Explain their secondary tendencies, hidden needs, and affection triggers, as plain text only",
  "strengths": "Describe the strengths and beautiful traits in the way they love, as plain text only",
  "challenges": "Describe weaknesses, blind spots, or potential relationship risks, as plain text only",
  "communicationStyle": "Describe how they express and interpret words, silence, conflict, and affection, as plain text only",
  "idealPartnerMatch": "Describe the type of person, personality, or energy that matches well with their love style, as plain text only",
  "growthAdvice": {
    "forSelf": "Personal growth or healing advice, as plain text only",
    "forRelationships": "Advice for thriving in love with others, as plain text only"
  },
  "aiInsight": "A metaphorical emotional analysis that captures the deeper meaning of their love patterns, as plain text only"
}

IMPORTANT RULES:
- Do NOT reference any questionnaires or quiz format in the output.
- Do NOT list love languages as a numbered list.
- Do NOT use JSON or list formatting inside the values.
- Use only natural English sentences for all text fields.
`;


    const response = await axios.post('https://openrouter.ai/api/v1/chat/completions',
        {model: "openai/gpt-oss-20b:free",
            messages: [{role: "user", content: prompt}],
            temperature: 0.3
        },
        {  
            headers: {
                Authorization: `Bearer ${key}`,
                "HTTP-Referer": "http://localhost:5173",
                "X-Title": "Love Hue"
            }
        }
    )

    const text = response.data.choices?.[0]?.message?.content || ""
      try {
        const json = text.match(/{[\s\S]*}/)
        if (!json) throw new Error('No JSON found in the response')
            return JSON.parse(json[0])
      } catch (error) {
        throw new Error('Error parsing JSON response: ' + text)
      }
} 

module.exports = { generateInsights } 