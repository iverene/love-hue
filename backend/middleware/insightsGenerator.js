const axios = require('axios');

async function generateInsights(answers) {
    const key = process.env.OPENAI_API_KEY;
    if (!key) throw new Error('OPENAI API key not configured');

const prompt = `
You are an advanced emotional intelligence AI, blending the expertise of a Color Psychologist, a Relationship Therapist (specializing in Attachment Theory), and a Poet. 

Your task is to analyze the user's quiz answers to construct a highly personalized "Love Hue" and psychological profile.

**CORE INSTRUCTION: DO NOT SUMMARIZE.** Do not say "Because you chose X, you are Y." Instead, look for the *tension* between their answers. (e.g., If they value "Independence" but crave "Reassurance," analyze that conflict). Dig into the *why* and the *subconscious* implications of their choices.

**1. DETERMINE THEIR "LOVE HUE" (Color Psychology):**
   - **Hue (The Base):** Determine the emotional "temperature". Warm (Reds/Golds) = Passion/Action. Cool (Blues/Greens) = Peace/Logic. Purple/Indigo = Intuition/Depth.
   - **Saturation (The Intensity):** How intense are their needs? High saturation = intense, anxious, or passionate attachment. Low saturation (Pastels) = gentle, secure, or avoidant attachment.
   - **Brightness (The Energy):** Darker shades = depth, mystery, or protection. Lighter shades = openness, optimism, or vulnerability.
   - **Selection:** Generate a specific, evocative color name (e.g., "Stormy Teal," "Burnt Saffron," "Ethereal Lilac").

**2. PSYCHOLOGICAL ANALYSIS (The Depth):**
   - Identify their **Attachment Style** (Secure, Anxious, Avoidant, Disorganized) based on how they handle distance and conflict.
   - Identify their **Emotional dialect**: Do they speak in logic, sensation, service, or affirmations?

USER ANSWERS:
${JSON.stringify(answers, null, 2)}

**CRITICAL: RESPOND WITH ONLY A JSON OBJECT. NO MARKDOWN. NO PREAMBLE.**

{
  "loveProfile": "A poetic, narrative summary of their soul's approach to love. Synthesize their contradictions into a cohesive picture. Use 'You'.",
  "primaryLoveStyle": "Don't just name a love language. Explain the *psychological function* it serves for them (e.g., 'You use acts of service to create order in chaos').",
  "secondaryLoveStyle": "The subtle, often hidden way they show care that others might miss. Explain their 'quiet' love language.",
  "personalColor": {
      "hex": "A valid 6-character HEX code (e.g., #4A90E2) that matches the psychology above.",
      "name": "A creative, evocative name for this specific shade.",
      "meaning": "A deep analysis of WHY this color fits. Connect color theory (warmth/coolness) to their emotional data (intimacy/independence)."
  },
  "strengths": "The 'Superpowers' of their love style. What makes them a healing or exciting partner to be with?",
  "challenges": "The 'Shadow Side'. Bluntly but kindly identify their blind spots, fears of abandonment/engulfment, or tendency to shut down.",
  "communicationStyle": "Analyze how they encode and decode messages. Do they read between the lines? Do they need literalism? Do they withdraw?",
  "idealPartnerMatch": "Describe the specific energy that balances them (e.g., 'Someone who offers an anchor for your kite').",
  "growthAdvice": {
    "forSelf": "Actionable psychological advice for self-soothing or emotional regulation.",
    "forRelationships": "Actionable advice on how to bridge the gap between their intent and their impact on others."
  },
  "aiInsight": "A singular, beautiful metaphor that captures the essence of their heart (e.g., 'Your love is like a lighthouse...')."
}

**FINAL RULES:**
- **Address the user as "You" directly.**
- **NO REPETITION:** Do not restate the questions.
- **NO LISTS:** Use flowing, natural paragraphs.
- **DEPTH OVER BREADTH:** Focus on 2-3 profound insights rather than 10 shallow ones.
`;


    const response = await axios.post('https://openrouter.ai/api/v1/chat/completions',
        {model: "allenai/molmo-2-8b:free",
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