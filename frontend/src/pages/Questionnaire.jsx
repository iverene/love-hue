import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; 
import Navbar from "../components/Navbar";

export default function Questionnaire() {
  const navigate = useNavigate();

  // 1. Initialize State from LocalStorage (Lazy Initialization)
  // This ensures we load saved data only on the first render
  const [index, setIndex] = useState(() => {
    const savedIndex = localStorage.getItem("loveHue_index");
    return savedIndex ? parseInt(savedIndex, 10) : 0;
  });

  const [answers, setAnswers] = useState(() => {
    const savedAnswers = localStorage.getItem("loveHue_answers");
    return savedAnswers ? JSON.parse(savedAnswers) : [];
  });

  // 2. Sync to LocalStorage
  // Whenever index or answers change, we save them automatically
  useEffect(() => {
    localStorage.setItem("loveHue_index", index);
    localStorage.setItem("loveHue_answers", JSON.stringify(answers));
  }, [index, answers]);

const questions = [
  // --- SECTION 1: THE SPARK (Expression & Connection) ---
  {
    question: "Love feels most real to you when it is...",
    options: [
      "Verbalized: Spoken clearly and frequently",
      "Experienced: Shared through undivided attention",
      "Demonstrated: Shown through helpful actions",
      "Symbolized: Captured in thoughtful tokens",
      "Felt: Transferred through physical closeness"
    ]
  },
  {
    question: "When you are completely enamored with someone, your instinct is to...",
    options: [
      "Write them long messages or tell them all their best qualities",
      "Clear your schedule to be near them as much as possible",
      "Look for ways to make their life easier or fix their problems",
      "Surprise them with things you saw that reminded you of them",
      "Find reasons to touch them, hold hands, or be physically close"
    ]
  },
  {
    question: "What creates the deepest sense of intimacy for you?",
    options: [
      "Late-night conversations where we bare our souls",
      "Doing a hobby or activity together in 'flow state'",
      "Building a life together (collaborating on goals/chores)",
      "Creating a collection of memories and mementos",
      "Skin-to-skin contact and non-sexual touch"
    ]
  },

  // --- SECTION 2: ATTACHMENT & SECURITY (The Psychology) ---
  {
    question: "When a partner seems distant or quiet, where does your mind go?",
    options: [
      "I give them space; I assume they will come back when ready (Secure)",
      "I panic and wonder if I did something to upset them (Anxious)",
      "I feel relieved to finally have some time to myself (Avoidant)",
      "I try to fix it immediately by asking 'What's wrong?' repeatedly (Anxious)",
      "I withdraw as well to protect myself from rejection (Avoidant/Protective)"
    ]
  },
  {
    question: "How do you handle emotional vulnerability?",
    options: [
      "I crave it; I want to merge deeply and quickly",
      "I am open, but I maintain a healthy sense of self",
      "I struggle with it; I fear being seen as weak or needy",
      "I share facts and thoughts, but I keep deep feelings guarded",
      "I express vulnerability through physical presence, not words"
    ]
  },
  {
    question: "Which relationship dynamic feels safest to you?",
    options: [
      "Total transparency: We know everything about each other",
      "Interdependence: We rely on each other but have separate lives",
      "Autonomy: We are partners, but I need strong boundaries",
      "Devotion: We prioritize each other above everyone else",
      "Consistency: We have a predictable, steady routine"
    ]
  },

  // --- SECTION 3: CONFLICT & REPAIR ---
  {
    question: "In the heat of an argument, what is your reflex?",
    options: [
      "I need to talk it out immediately; silence feels dangerous",
      "I need to step away and process alone before I say something I regret",
      "I try to de-escalate by focusing on logic and facts",
      "I shut down/freeze and struggle to find my words",
      "I reach out for physical contact to re-establish the bond"
    ]
  },
  {
    question: "How do you know an apology is sincere?",
    options: [
      "They articulate exactly what they did wrong and why it hurt",
      "They sit with me and listen until I feel heard",
      "They immediately change the behavior (Changed behavior > Words)",
      "They bring a peace offering that shows they were thinking of me",
      "They hug me and I can feel the tension leave their body"
    ]
  },

  // --- SECTION 4: MENTAL LOAD & SUPPORT ---
  {
    question: "When you are overwhelmed with life, what do you crave?",
    options: [
      "Encouragement: 'You can do this, I believe in you'",
      "Presence: Someone just sitting nearby while I work (Body Doubling)",
      "Relief: Someone taking a task off my plate without asking",
      "Treats: A comfort meal or small gift to cheer me up",
      "Grounding: A long hug that resets my nervous system"
    ]
  },
  {
    question: "What makes you feel most 'seen' by a partner?",
    options: [
      "When they compliment a specific trait or idea I have",
      "When they remember a story I told them months ago",
      "When they notice I'm tired and handle the logistics",
      "When they buy me something related to a niche interest",
      "When they notice my body language changes before I speak"
    ]
  },

  // --- SECTION 5: LIFESTYLE & VALUES ---
  {
    question: "How do you view personal independence?",
    options: [
      "It's scary; I prefer us to be a unit",
      "It's vital; I need to maintain my own identity and secrets",
      "It's healthy; I want us to be two wholes making a greater whole",
      "It's practical; we should be able to function without each other",
      "It's flexible; I want to be independent but emotionally tethered"
    ]
  },
  {
    question: "What is your 'Golden Rule' for a relationship?",
    options: [
      "Never go to bed angry (Communication)",
      "Always make time for date night (Prioritization)",
      "Actions speak louder than words (Reliability)",
      "Always remember special occasions (Thoughtfulness)",
      "Never withhold affection (Connection)"
    ]
  },
  {
    question: "Which weekend activity sounds like peak romance?",
    options: [
      "Coffee and deep conversation for hours",
      "A road trip with no destination, just us",
      "Building furniture or tackling a home project together",
      "Going to a flea market to find hidden treasures",
      "Staying in bed all morning, just cuddling"
    ]
  },

  // --- SECTION 6: THE DEEP SUBCONSCIOUS ---
  {
    question: "What is your deepest relationship fear?",
    options: [
      "Being misunderstood or criticized constantly",
      "Being ignored or feeling invisible in the same room",
      "Being a burden or having needs that are 'too much'",
      "Being forgotten or not valued enough",
      "Being physically rejected or untouched"
    ]
  },
  {
    question: "If you could only have one for the rest of your life, what would it be?",
    options: [
      "To be admired and spoken of highly",
      "To be understood without having to explain",
      "To be supported in my ambitions and daily life",
      "To be cherished and surprised",
      "To be held and desired"
    ]
  },
  
  // --- SECTION 7: NUANCED SCENARIOS ---
  {
    question: "Your partner goes on a trip. What do you miss most?",
    options: [
      "The sound of their voice and our daily debriefs",
      "Having a companion for activities and meals",
      "The help they provide around the house",
      "The little things they bring home for me",
      "The warmth of their body next to mine"
    ]
  },
  {
    question: "How do you define 'Loyalty'?",
    options: [
      "Defending my name when I'm not in the room",
      "Prioritizing our time together over others",
      "Being reliable; doing what you say you will do",
      "Keeping my secrets and holding my history",
      "Physical faithfulness and exclusive intimacy"
    ]
  },
  {
    question: "What makes a house feel like a home?",
    options: [
      "The laughter and conversations that fill it",
      "The people who spend time inside it",
      "The order, cleanliness, and functionality of it",
      "The art, decor, and items that tell a story",
      "The comfort and coziness of the furniture"
    ]
  },
  {
    question: "When you achieve a major goal, you want your partner to...",
    options: [
      "Tell me how proud they are and brag about me",
      "Take me out to celebrate and share the moment",
      "Handle the mundane stuff so I can bask in the win",
      "Give me a memento to mark the milestone",
      "Embrace me enthusiastically"
    ]
  },
  {
    question: "Ideally, love should feel like...",
    options: [
      "A beautiful melody (Harmonious & Expressive)",
      "A warm fireplace (Constant & Present)",
      "A strong foundation (Solid & Reliable)",
      "A treasure chest (Rich & Valuable)",
      "A soft blanket (Comforting & Enveloping)"
    ]
  }
];

  const handleAnswer = (selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[index] = selectedOption;

    const validAnswers = newAnswers.slice(0, index + 1);
    
    setAnswers(validAnswers);

    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      localStorage.removeItem("loveHue_index");
      localStorage.removeItem("loveHue_answers");
      navigate("/insights", { state: { answers: validAnswers } });
    }
  };

  const handleBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const progress = ((index + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-softWhite relative overflow-hidden flex flex-col px-5">
      {/* Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full bg-spectrum-mesh opacity-50 pointer-events-none"></div>

      <Navbar />

      <div className="grow flex justify-center items-center p-6 relative z-10 pt-24 pb-12">
        <div className="max-w-xl w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-coralPink/10 border border-white/50 overflow-hidden flex flex-col">
          
          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-cloudGray/50">
            <div 
              className="h-full bg-linear-to-r from-coralPink via-violet to-skyBlue transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="p-5 lg:p-7">
            {/* Question Counter */}
            <p className="text-xs font-bold tracking-[0.2em] text-mutedBlueGray/60 uppercase mb-6 text-center">
              Question {index + 1} / {questions.length}
            </p>

            {/* Question Title */}
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-charcoal text-center leading-tight mb-10 min-h-[80px] flex items-center justify-center">
              {questions[index].question}
            </h2>

            {/* Options */}
            <div className="flex flex-col gap-3">
              {questions[index].options.map((option, i) => {
                const isSelected = answers[index] === option;

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(option)}
                    className={`group relative w-full text-left px-6 py-4 rounded-xl border transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-0.5
                      ${isSelected 
                        ? "bg-coralPink border-coralPink shadow-md" // Active Styles
                        : "bg-white/60 border-cloudGray hover:border-coralPink hover:bg-white" // Default Styles
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-body font-medium transition-colors lg:text-lg 
                        ${isSelected ? "text-white" : "text-charcoal/80 group-hover:text-charcoal"}`}>
                        {option}
                      </span>

                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-cloudGray/20 py-4 px-6 border-t border-white/50 flex justify-between items-center">
            <div className="w-1/3">
                {index > 0 && (
                <button 
                    onClick={handleBack}
                    className="flex items-center text-sm font-body text-mutedBlueGray hover:text-coralPink transition-colors cursor-pointer"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                </button>
                )}
            </div>
            
        
          </div>

        </div>
      </div>
    </div>
  );
}