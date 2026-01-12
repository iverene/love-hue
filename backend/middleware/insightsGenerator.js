const axios = require('axios');

async function generateInsights(answers) {
    const key = process.env.OPENAI_API_KEY;
    if (!key) throw new Error('OPENAI API key not configured');

const prompt = `
You are a professional relationship and emotional psychology expert. Analyze the quiz answers and generate an in-depth love expression profile for the user.

**CRITICAL INSTRUCTION: Address the user directly using "You" and "Your". Do NOT use "He/She/They" or "The user".**

1. Analyze the user's answers to determine their specific "Love Hue".
   - If they value warmth, words, and touch, lean towards warm colors (Reds, Oranges, Pinks).
   - If they value service, logic, and peace, lean towards cool colors (Blues, Teals, Greens).
   - If they value uniqueness, depth, and intuition, lean towards complex colors (Violets, Indigos, Magentas).
   - You are NOT limited to the standard rainbow. You can generate specific shades like "Dusty Rose," "Midnight Sapphire," or "Golden Sage."

2. Go beyond traditional love languages. Identify hidden patterns, attachment tendencies, emotional needs, boundaries, and communication styles.

USER ANSWERS:
${JSON.stringify(answers, null, 2)}

CRITICAL: You MUST respond with ONLY a JSON object in this EXACT structure. All values must be plain text strings:

{
  "loveProfile": "Provide a poetic but practical summary of how YOU give and receive love.",
  "primaryLoveStyle": "Explain YOUR dominant love expressions and emotional patterns.",
  "secondaryLoveStyle": "Explain YOUR secondary tendencies, hidden needs, and affection triggers.",
  "personalColor": {
      "hex": "A valid 6-character HEX code (e.g., #FF5733) representing their energy",
      "name": "A creative name for this color (e.g., 'Velvet Crimson' or 'Morning Mist')",
      "meaning": "Explain WHY this specific color represents their emotional style. Connect color psychology to their quiz results."
  },
  "strengths": "Describe the strengths and beautiful traits in the way YOU love.",
  "challenges": "Describe YOUR weaknesses, blind spots, or potential relationship risks.",
  "communicationStyle": "Describe how YOU express and interpret words, silence, conflict, and affection.",
  "idealPartnerMatch": "Describe the type of person, personality, or energy that matches well with YOUR love style.",
  "growthAdvice": {
    "forSelf": "Personal growth or healing advice for YOU.",
    "forRelationships": "Advice for YOU on how to thrive in love with others."
  },
  "aiInsight": "A metaphorical emotional analysis that captures the deeper meaning of YOUR love patterns."
}

IMPORTANT RULES:
- Address the user as "You" in every field.
- Do NOT reference any questionnaires or quiz format in the output.
- Do NOT list love languages as a numbered list.
- Do NOT use JSON or list formatting inside the values.
- Use only natural English sentences for all text fields.
`;


    const response = await axios.post('https://openrouter.ai/api/v1/chat/completions',
        {model: "google/gemini-2.0-flash-lite-preview-02-05:free",
            messages: [{role: "user", content: prompt}],
            temperature: 0.7
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