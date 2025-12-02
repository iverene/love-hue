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
    {
      question: "Which kind of surprise makes you happiest?",
      options: [
        "A heartfelt letter expressing deep feelings",
        "A spontaneous adventure to somewhere new",
        "Coming home to a completely clean house",
        "A gift that shows they really know my taste",
        "A long, uninterrupted embrace when I walk in"
      ]
    },
    {
      question: "When you feel misunderstood, what do you need most?",
      options: [
        "Space to process my thoughts alone first",
        "Immediate reassurance that we are okay",
        "A logical breakdown of where the miscommunication happened",
        "Physical comfort to ground me",
        "Someone to just listen without trying to fix it"
      ]
    },
    {
      question: "What makes you feel most intellectually connected to someone?",
      options: [
        "Debating complex topics or theories",
        "Sharing books, articles, or music we love",
        "Working together to solve a difficult problem",
        "Dreaming about the future and setting goals",
        "Sitting in comfortable silence while reading separately"
      ]
    },
    {
      question: "Which behavior feels most romantic to you?",
      options: [
        "Being told exactly why I am special to them",
        "Them dropping everything to be with me",
        "Anticipating my needs before I ask",
        "Bringing me a small token from their day",
        "Holding hands while walking, even after years together"
      ]
    },
    {
      question: "How do you view personal space in a relationship?",
      options: [
        "I need a lot of alone time to recharge",
        "I prefer doing everything together",
        "I like being in the same room but doing different things",
        "I need physical touch but mental independence",
        "It depends entirely on my mood that day"
      ]
    },
    {
      question: "Which is the best way to celebrate your successes?",
      options: [
        "Public recognition or a toast among friends",
        "A quiet, intimate dinner just the two of us",
        "Someone taking a load off my plate so I can relax",
        "A tangible reward or memento to mark the occasion",
        "Physical intimacy and closeness"
      ]
    },
    {
      question: "What is your biggest trigger during an argument?",
      options: [
        "Feeling dismissed or unheard",
        "Raised voices or aggressive tone",
        "The other person walking away/shutting down",
        "Emotional manipulation or guilt-tripping",
        "Focusing on logic instead of feelings"
      ]
    },
    {
      question: "How do you feel about handwritten notes or letters?",
      options: [
        "They are the ultimate treasure; I keep them all",
        "They are sweet, but I prefer face-to-face words",
        "I appreciate the effort, but actions matter more",
        "I love them if they accompany a thoughtful gesture",
        "They are nice, but physical presence feels more real"
      ]
    },
    {
      question: "What role does humor play in your connection?",
      options: [
        "It's essential; banter is my love language",
        "I love inside jokes that only we understand",
        "It helps diffuse tension during stress",
        "It's nice, but deep seriousness matters more",
        "I show affection through playful teasing"
      ]
    },
    {
      question: "How do you prefer to apologize or be apologized to?",
      options: [
        "A detailed verbal explanation and 'I'm sorry'",
        "Spending quality time to reconnect",
        "Changing behavior immediately (Action > Words)",
        "A peace offering or small gift",
        "A hug that signifies the fight is over"
      ]
    },
    {
      question: "What makes you feel proud in a relationship?",
      options: [
        "How we speak about each other to others",
        " The memories and travel we've experienced",
        "How efficiently we handle life's challenges",
        "The thoughtful life we've built together",
        "The intense chemistry we maintain"
      ]
    },
    {
      question: "When you are stressed, what helps you the most?",
      options: [
        "Words of encouragement and validation",
        "Someone dragging me out to have fun",
        "Someone taking over my to-do list",
        "A surprise treat or comfort food",
        "Being held without needing to talk"
      ]
    },
    {
      question: "What do you consider a thoughtful gesture?",
      options: [
        "Sending a text just to say 'thinking of you'",
        "Putting away their phone to focus on me",
        "Filling up my gas tank or doing a chore",
        "Remembering a small detail I mentioned weeks ago",
        "Brushing hair out of my face"
      ]
    },
    {
      question: "How do you define loyalty?",
      options: [
        "Defending me when I'm not in the room",
        "Prioritizing our relationship over others",
        "Showing up consistently, day after day",
        "Keeping my secrets and vulnerabilities safe",
        "Physical faithfulness and devotion"
      ]
    },
    {
      question: "How do you prefer to be comforted after a bad day?",
      options: [
        "Listening and letting me vent",
        "Distracting me with an activity or movie",
        "Helping me solve the problem logically",
        "Buying me my favorite snack or drink",
        "Cuddling on the couch in silence"
      ]
    },
    {
      question: "What energy do you bring to a relationship?",
      options: [
        "The Cheerleader (Encouraging & Vocal)",
        "The Anchor (Steady & Present)",
        "The Fixer (Helpful & Practical)",
        "The Curator (Thoughtful & Detail-oriented)",
        "The Lover (Affectionate & Warm)"
      ]
    },
    {
      question: "Which way of showing care do you notice first?",
      options: [
        "Someone complimenting my ideas or appearance",
        "Someone clearing their schedule for me",
        "Someone noticing I'm overwhelmed and helping",
        "Someone bringing me a souvenir from a trip",
        "Someone reaching out to touch my arm"
      ]
    },
    {
      question: "What kind of date feels ideal to you?",
      options: [
        "Deep conversation at a quiet coffee shop",
        "An activity like hiking, gaming, or a workshop",
        "Cooking a complex meal together at home",
        "Exploring a museum or art gallery",
        "A movie night with lots of cuddling"
      ]
    },
    {
      question: "Which fears resonates with you most?",
      options: [
        "Being criticized or feeling inadequate",
        "Being ignored or feeling invisible",
        "Being seen as a burden or useless",
        "Being forgotten or not valued",
        "Being physically rejected or untouched"
      ]
    },
    {
      question: "What’s the best way someone can show support for you?",
      options: [
        "Telling me 'I believe in you'",
        "Sitting with me while I work",
        "Helping me brainstorm or plan",
        "Surprising me with resources I need",
        "A reassuring squeeze of the hand"
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