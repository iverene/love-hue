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
        "A heartfelt note or letter",
        "A spontaneous hangout or trip",
        "Someone completing a chore for me",
        "A meaningful gift",
        "A warm hug or touch"
      ]
    },
    {
      question: "What matters most when resolving conflict?",
      options: [
        "Words of reassurance",
        "Time spent discussing together",
        "Practical solutions or compromises",
        "Small gestures of apology",
        "Physical comfort like hugs"
      ]
    },
    {
      question: "What kind of memories do you treasure most?",
      options: [
        "Words shared in letters or messages",
        "Moments spent together in adventures",
        "Times someone supported me in tasks",
        "Receiving thoughtful keepsakes",
        "Moments of physical closeness"
      ]
    },
    {
      question: "Which behavior feels most romantic to you?",
      options: [
        "Poetic or loving words",
        "Dedicated quality time",
        "Helping me without asking",
        "Gifts that show thought",
        "Gentle physical touch"
      ]
    },
    {
      question: "How do you show appreciation to someone?",
      options: [
        "Verbal compliments",
        "Spending time together",
        "Acts of service",
        "Giving thoughtful gifts",
        "Physical affection"
      ]
    },
    {
      question: "Which is the best way to celebrate your successes?",
      options: [
        "Receiving praise and recognition",
        "Sharing the moment with someone",
        "Having someone organize a celebration",
        "Gifts or tokens to commemorate",
        "Warm hugs or closeness"
      ]
    },
    {
      question: "What makes a relationship feel secure to you?",
      options: [
        "Open and honest communication",
        "Regular quality time together",
        "Reliability and helping each other",
        "Exchanging thoughtful gifts",
        "Consistent physical affection"
      ]
    },
    {
      question: "How do you feel about handwritten notes or letters?",
      options: [
        "They mean everything",
        "Nice, but not essential",
        "Prefer actions over words",
        "Appreciate if accompanied by a gift",
        "Physical gestures are better"
      ]
    },
    {
      question: "Which type of weekend do you prefer?",
      options: [
        "Sharing meaningful conversations",
        "Doing activities together",
        "Helping each other with projects",
        "Receiving or giving thoughtful gifts",
        "Relaxing with hugs or cuddles"
      ]
    },
    {
      question: "How do you prefer to apologize or be apologized to?",
      options: [
        "Heartfelt words",
        "Spending time to talk it through",
        "Actions that fix the issue",
        "A small gift or gesture",
        "Physical reassurance or touch"
      ]
    },
    {
      question: "What makes you feel proud in a relationship?",
      options: [
        "Compliments or praise from them",
        "Shared experiences and adventures",
        "Mutual help and teamwork",
        "Receiving thoughtful gifts",
        "Physical closeness and intimacy"
      ]
    },
    {
      question: "Which surprises make you feel most valued?",
      options: [
        "Words of affirmation",
        "A spontaneous day together",
        "Help with a difficult task",
        "A personalized gift",
        "A meaningful hug"
      ]
    },
    {
      question: "What do you consider a thoughtful gesture?",
      options: [
        "Writing or saying kind words",
        "Spending uninterrupted time",
        "Doing chores or errands for someone",
        "Giving a small meaningful item",
        "Offering comforting touch"
      ]
    },
    {
      question: "What’s the most important in a friendship?",
      options: [
        "Encouraging words",
        "Shared experiences",
        "Supportive actions",
        "Thoughtful presents",
        "Physical comfort like hugs"
      ]
    },
    {
      question: "How do you prefer to be comforted after a bad day?",
      options: [
        "Listening and speaking kindly",
        "Spending time together",
        "Helping solve problems",
        "Receiving a small thoughtful item",
        "Physical touch or embrace"
      ]
    },
    {
      question: "Which is the most meaningful way to celebrate anniversaries?",
      options: [
        "Writing letters or notes",
        "Spending the day together",
        "Acts of service or planning",
        "Giving memorable gifts",
        "Physical closeness"
      ]
    },
    {
      question: "Which way of showing care do you notice first?",
      options: [
        "Compliments or verbal praise",
        "Quality time spent together",
        "Help or support in tasks",
        "Gifts and surprises",
        "Physical affection"
      ]
    },
    {
      question: "What kind of date feels ideal to you?",
      options: [
        "Talking about dreams and feelings",
        "Doing an activity together",
        "One partner helping the other",
        "Giving each other small thoughtful gifts",
        "Cuddling, holding hands, or kissing"
      ]
    },
    {
      question: "Which action makes you feel most loved?",
      options: [
        "Hearing encouraging words",
        "Someone prioritizing time with me",
        "Receiving help or assistance",
        "Getting a personalized gift",
        "Feeling physical closeness"
      ]
    },
    {
      question: "What’s the best way someone can show support for you?",
      options: [
        "Words of reassurance",
        "Being present when needed",
        "Helping me achieve a goal",
        "Gifting something meaningful",
        "A comforting hug or touch"
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