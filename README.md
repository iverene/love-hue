# 🎨 LoveHue

> **"Every heart has a hue."**

**LoveHue** is an interactive, AI-powered application that reimagines the concept of Love Languages as a visual color spectrum. Instead of categorizing affection into rigid boxes, LoveHue analyzes your emotional patterns to generate a unique "Love Profile" and color palette—revealing how you paint your relationships.


## ✨ Features

  * **🌈 The Spectrum Logic:** Moves beyond the traditional 5 Love Languages by analyzing emotional hues (Coral, Gold, Mint, Sky, Violet).
  * **🧠 AI-Powered Insights:** Uses LLMs (via OpenRouter/OpenAI) to generate a deep, poetic psychological profile based on quiz results.
  * **🎨 Dynamic UI/UX:** Features a fading background slideshow, glassmorphism cards, and fluid gradient animations using **Tailwind CSS v4**.
  * **📝 Interactive Questionnaire:** A 20-question assessment with progress tracking and state persistence (Local Storage) so users never lose their place.
  * **📱 Fully Responsive:** Optimized for mobile, tablet, and desktop experiences.

## 🛠️ Tech Stack

### Frontend

  * **Framework:** React (Vite)
  * **Styling:** Tailwind CSS (v4)
  * **Routing:** React Router DOM
  * **Icons:** Lucide React
  * **HTTP Client:** Axios

### Backend

  * **Runtime:** Node.js
  * **Server:** Express.js
  * **AI Integration:** OpenRouter API (connecting to models like GPT or Llama)
  * **Deployment:** Vercel (Frontend & Backend)

## 📂 Project Structure

```bash
LoveHue/
├── frontend/                # React Frontend
│   ├── src/
│   │   ├── components/    # Navbar, Footer
│   │   ├── pages/         # Home, Questionnaire, Insights
│   │   └── index.css      # Tailwind @theme configuration
│   └── vercel.json        # Routing configuration for SPA
│
└── backend/               # Express Backend
    ├── routes/            # API endpoints
    ├── middleware/        # AI Prompt Engineering & Logic
    └── index.js           # Server entry point
```

## 🚀 Getting Started

Follow these steps to run LoveHue locally.

### 1\. Clone the Repository

```bash
git clone https://github.com/your-username/love-hue.git
cd love-hue
```

### 2\. Backend Setup

Navigate to the server folder and install dependencies.

```bash
cd backend
npm install
```

Create a `.env` file in the `server` directory:

```env
PORT=5000
OPENAI_API_KEY=your_openrouter_or_openai_key_here
```

Start the server:

```bash
npm start
# Server running at http://localhost:5000
```

### 3\. Frontend Setup

Open a new terminal, navigate to the client folder, and install dependencies.

```bash
cd frontend
npm install
```

Create a `.env` file in the `client` directory (optional for local, but good practice):

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
# App running at http://localhost:5173
```

## 🎨 The Palette (Design System)

LoveHue uses a custom CSS variable system defined in Tailwind v4:

| Color Name | Hex Code | Meaning |
| :--- | :--- | :--- |
| **Coral Pink** | `#F26C7F` | Words of Affirmation (Warmth) |
| **Golden Yellow** | `#F6C758` | Quality Time (Radiance) |
| **Mint Green** | `#6BC8A6` | Receiving Gifts (Thoughtfulness) |
| **Sky Blue** | `#48A3E3` | Acts of Service (Reliability) |
| **Violet** | `#7D5BD6` | Physical Touch (Depth) |

## 📡 API Reference

#### Generate Insights

Analyzes user answers and returns a JSON profile.

```http
POST /api/user/insights
```

**Body:**

```json
{
  "answers": [
    "A heartfelt note",
    "Time spent discussing",
    ...
  ]
}
```

**Response:**

```json
{
  "loveProfile": "...",
  "primaryLoveStyle": "...",
  "aiInsight": "Your heart is like a deep ocean trench..."
}
```

## 🚀 Deployment

### Frontend (Vercel)

1.  Push code to GitHub.
2.  Import project to Vercel.
3.  Add `vercel.json` to the root for routing rewrites.
4.  Set Environment Variable `VITE_API_URL` to your deployed backend URL.

### Backend (Vercel/Render)

1.  Ensure `cors` is configured to accept requests from your Vercel frontend domain.
2.  Set `OPENAI_API_KEY` in your deployment provider's environment variables.

## 🤝 Contributing

Contributions are welcome\!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

-----

Developed with ❤️ by Iverene Grace M. Causapin

