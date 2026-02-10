import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Sparkles,
  Heart,
  Shield,
  ShieldAlert,
  MessageCircle,
  UserPlus,
  Sprout,
  ArrowRight,
  AlertCircle,
  HeartHandshake,
} from "lucide-react";
import Navbar from "../components/Navbar";

export default function Insights() {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const answers = location.state?.answers || [];

  const BASE_URL = "https://love-hue-backend.vercel.app";

  useEffect(() => {
    if (!answers || answers.length === 0) {
      navigate("/");
      return;
    }

    const generateInsights = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.post(`${BASE_URL}/api/user/insights`, {
          answers,
        });

        setResult(res.data);

        localStorage.removeItem("loveHue_index");
        localStorage.removeItem("loveHue_answers");
      } catch (err) {
          console.error("Error generating insights:", err);
          const errorMessage = err.response?.data?.error || "We couldn't generate your palette right now. Please try again.";
          setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    generateInsights();
  }, [answers, navigate]);

  // --- LOADING VIEW ---
  if (loading) {
    return (
      <div className="min-h-screen bg-softWhite flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-spectrum-mesh opacity-30 animate-pulse"></div>
        <div className="z-10 text-center space-y-6 px-4">
          <div className="relative">
            {/* The pulsing glow effect behind the logo */}
            <div className="absolute inset-0 bg-coralPink blur-xl opacity-20 animate-ping"></div>

            <img
              src="/logo.png"
              alt="LoveHue Logo"
              className="w-16 h-16 object-contain animate-bounce mx-auto"
            />
          </div>
          <h2 className="font-heading text-3xl text-charcoal">
            Analyzing your palette...
          </h2>
          <p className="font-body text-mutedBlueGray animate-pulse">
            Consulting the psychology of color & emotion
          </p>
        </div>
      </div>
    );
  }

  // --- ERROR VIEW ---
  if (error) {
    return (
      <div className="min-h-screen bg-softWhite flex flex-col items-center justify-center p-6 text-center">
        <Navbar />
        <div className="bg-white p-8 rounded-2xl border border-cloudGray shadow-xl max-w-md">
          <AlertCircle className="w-12 h-12 text-love-coral mx-auto mb-4" />
          <h3 className="font-heading text-2xl text-charcoal mb-2">Oops!</h3>
          <p className="font-body text-mutedBlueGray mb-6">{error}</p>
          <button
            onClick={() => navigate("/")}
            className="bg-charcoal text-white px-6 py-3 rounded-full font-body hover:bg-coralPink transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  // --- RESULTS VIEW ---
  return (
    <div className="min-h-screen bg-softWhite relative">
      <div className="absolute top-0 left-0 w-full h-full bg-spectrum-mesh opacity-20 pointer-events-none"></div>
      <Navbar />

      <main className="pt-24 pb-20 px-4 sm:px-6">
        {result && (
          <div className="max-w-5xl mx-auto space-y-12 animate-fade-in-up">
            {/* 1. HERO SUMMARY */}
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              {/* The Generated Color Circle */}
              <div className="flex flex-col items-center justify-center gap-4">
                <div
                  className="w-24 h-24 rounded-full shadow-2xl border-4 border-white animate-fade-in-up"
                  style={{
                    backgroundColor: result.personalColor?.hex || "#F26C7F",
                    boxShadow: `0 10px 40px -10px ${
                      result.personalColor?.hex || "#F26C7F"
                    }`,
                  }}
                ></div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-softWhite border border-cloudGray text-charcoal text-sm font-bold tracking-wider uppercase">
                  <Sparkles
                    className="w-4 h-4"
                    style={{ color: result.personalColor?.hex }}
                  />
                  Your Hue: {result.personalColor?.name || "Unknown"}
                </div>
              </div>

              <h1 className="font-heading text-5xl md:text-6xl text-charcoal font-bold leading-tight">
                The Art of Your Affection
              </h1>

              <p className="font-heading text-2xl text-mutedBlueGray italic leading-relaxed">
                "{result.loveProfile}"
              </p>

              {/* Color Meaning Section */}
              <div className="bg-white/60 border border-cloudGray p-6 rounded-2xl max-w-2xl mx-auto mt-6">
                <h3
                  className="font-heading text-xl font-bold mb-2"
                  style={{ color: result.personalColor?.hex }}
                >
                  Why {result.personalColor?.name}?
                </h3>
                <p className="font-body text-charcoal/80 text-sm leading-relaxed">
                  {result.personalColor?.meaning}
                </p>
              </div>
            </div>

            {/* 2. PRIMARY & SECONDARY CARDS */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Primary */}
              <div className="bg-linear-to-br from-coralPink to-peachAccent p-0.5 rounded-3xl shadow-xl transform hover:-translate-y-1 transition-transform">
                <div className="bg-white/95 backdrop-blur-sm h-full rounded-[22px] p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-coralPink/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                  <h3 className="font-heading text-3xl text-charcoal mb-4 flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-coralPink"></span>
                    Primary Style
                  </h3>
                  <p className="font-body text-charcoal/80 text-lg leading-relaxed">
                    {result.primaryLoveStyle}
                  </p>
                </div>
              </div>

              {/* Secondary */}
              <div className="bg-linear-to-br from-violet to-skyBlue p-0.5 rounded-3xl shadow-xl transform hover:-translate-y-1 transition-transform">
                <div className="bg-white/95 backdrop-blur-sm h-full rounded-[22px] p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-violet/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                  <h3 className="font-heading text-3xl text-charcoal mb-4 flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-violet"></span>
                    Secondary Style
                  </h3>
                  <p className="font-body text-charcoal/80 text-lg leading-relaxed">
                    {result.secondaryLoveStyle}
                  </p>
                </div>
              </div>
            </div>

            {/* 3. GRID OF DETAILS */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Strengths */}
              <div className="bg-white/60 border border-cloudGray p-6 rounded-2xl">
                <div className="w-10 h-10 bg-mintGreen/20 rounded-full flex items-center justify-center mb-4 text-mintGreen">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-heading text-xl font-bold text-charcoal mb-2">
                  Your Strengths
                </h4>
                <p className="font-body text-sm text-mutedBlueGray leading-relaxed">
                  {result.strengths}
                </p>
              </div>

              {/*  Challenges */}
              <div className="bg-white/60 border border-cloudGray p-6 rounded-2xl">
                <div className="w-10 h-10 bg-mintGreen/20 rounded-full flex items-center justify-center mb-4 text-mintGreen">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h4 className="font-heading text-xl font-bold text-charcoal mb-2">
                  Challenges
                </h4>
                <p className="font-body text-sm text-mutedBlueGray leading-relaxed">
                  {result.challenges}
                </p>
              </div>

              {/* Communication */}
              <div className="bg-white/60 border border-cloudGray p-6 rounded-2xl">
                <div className="w-10 h-10 bg-skyBlue/20 rounded-full flex items-center justify-center mb-4 text-skyBlue">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="font-heading text-xl font-bold text-charcoal mb-2">
                  Communication
                </h4>
                <p className="font-body text-sm text-mutedBlueGray leading-relaxed">
                  {result.communicationStyle}
                </p>
              </div>

              {/* Ideal Match */}
              <div className="bg-white/60 border border-cloudGray p-6 rounded-2xl">
                <div className="w-10 h-10 bg-goldenYellow/20 rounded-full flex items-center justify-center mb-4 text-goldenYellow">
                  <UserPlus className="w-5 h-5" />
                </div>
                <h4 className="font-heading text-xl font-bold text-charcoal mb-2">
                  Ideal Match
                </h4>
                <p className="font-body text-sm text-mutedBlueGray leading-relaxed">
                  {result.idealPartnerMatch}
                </p>
              </div>
            </div>

            {/* 4. AI METAPHOR (Feature Box) */}
            <div className="bg-charcoal rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-spectrum-mesh opacity-20"></div>
              <div className="relative z-10">
                <p className="font-heading text-2xl md:text-3xl text-white italic mb-4">
                  "{result.aiInsight}"
                </p>
                <div className="w-20 h-1 bg-linear-to-r from-coralPink via-violet to-skyBlue mx-auto rounded-full"></div>
              </div>
            </div>

            {/* 5. GROWTH ADVICE */}
            <div className="bg-white/80 backdrop-blur-md border border-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <Sprout className="w-6 h-6 text-tealAccent" />
                <h3 className="font-heading text-3xl text-charcoal">
                  Path to Growth
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="font-body font-bold text-mutedBlueGray uppercase tracking-widest text-xs mb-3">
                    For Yourself
                  </h4>
                  <p className="font-body text-charcoal text-lg leading-relaxed border-l-4 border-coralPink pl-4">
                    {result.growthAdvice?.forSelf}
                  </p>
                </div>
                <div>
                  <h4 className="font-body font-bold text-mutedBlueGray uppercase tracking-widest text-xs mb-3">
                    For Relationships
                  </h4>
                  <p className="font-body text-charcoal text-lg leading-relaxed border-l-4 border-violet pl-4">
                    {result.growthAdvice?.forRelationships}
                  </p>
                </div>
              </div>
            </div>

            {/* CLOSING REMINDER */}
            <div className="max-w-3xl mx-auto mt-8">
              <div className="bg-white/80 backdrop-blur-sm border border-white rounded-2xl p-8 text-center relative overflow-hidden">
                {/* Subtle top gradient line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-coralPink/30 via-violet/30 to-skyBlue/30"></div>

                <div className="flex justify-center mb-4">
                  <HeartHandshake className="w-8 h-8 text-mutedBlueGray/50" />
                </div>

                <h3 className="font-heading text-2xl md:text-3xl text-charcoal/90 italic mb-3 leading-snug">
                  "Everyone loves differently—and you just need to see their
                  color as they are."
                </h3>

                <p className="font-body text-mutedBlueGray text-sm md:text-base max-w-lg mx-auto">
                  Just because someone's hue doesn't match yours, doesn't mean
                  they love you any less. It simply means learning to appreciate
                  a different kind of masterpiece.
                </p>
              </div>
            </div>

            {/* CTA / ACTIONS */}
            <div className="flex justify-center pt-8 pb-12">
              <button
                onClick={() => navigate("/")}
                className="group flex items-center gap-2 font-body bg-white border border-cloudGray px-8 py-3 rounded-full hover:border-coralPink hover:text-coralPink transition-all cursor-pointer"
              >
                Retake Analysis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
