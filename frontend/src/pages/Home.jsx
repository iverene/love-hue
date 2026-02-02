import React, { useState, useEffect } from 'react'; 
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

export default function Home() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "/hero-bg-1.jpg",
    "/hero-bg-2.jpg",
    "/hero-bg-3.jpg",
    "/hero-bg-4.jpeg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);


  return (
    <div className="bg-softWhite min-h-screen">
       <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((imageSrc, index) => (
             <div
               key={index}
               className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out
               ${
                 index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
               }`}
               style={{ backgroundImage: `url(${imageSrc})` }}
             >
                <div className="absolute inset-0 bg-black/50"></div>
             </div>
          ))}
        </div>


        <div className="absolute inset-0 bg-spectrum-mesh opacity-30 pointer-events-none z-20 mix-blend-overlay"></div>

        <div className="relative z-30 max-w-4xl mx-auto space-y-6">
          <h1 className="font-heading text-6xl md:text-8xl text-white font-bold leading-tight animate-fade-in-up drop-shadow-lg">
            Discover the <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-coralPink via-violet to-skyBlue">
              Love in Hue
            </span>
          </h1>
          
          <p className="font-body text-cloudGray text-lg md:text-2xl max-w-2xl mx-auto font-light tracking-wide drop-shadow-md">
            Love is a language drawn in tones—discover the hues that speak for you.
          </p>

          <div className="pt-8">
            <a 
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 font-body text-md font-semibold text-charcoal bg-white rounded-full transition-all duration-300 hover:bg-coralPink hover:text-white hover:scale-105 hover:shadow-xl group"
            >
              Find Your Hue
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* --- LOVE LANGUAGE CARDS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="font-body text-sm font-bold uppercase tracking-widest text-mutedBlueGray/60 mb-2 block">
              The Spectrum
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal">
              The Five Hues of Affection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            
            {/* Card 1: Words of Affirmation (Coral) */}
            <LanguageCard 
              image="/affirmation.jpg" 
              color="border-coralPink"
              textColor="text-coralPink"
              title="Words of Affirmation"
              desc="Expressing affection through spoken words, praise, or appreciation. For this hue, hearing 'I love you' paints the world bright."
            />

            {/* Card 2: Quality Time (Gold) */}
            <LanguageCard 
              image="/quality-time.jpg" 
              color="border-goldenYellow"
              textColor="text-goldenYellow"
              title="Quality Time"
              desc="Expressing affection with undivided attention. No phones, just focus. This hue shines brightest in shared moments."
            />

            {/* Card 3: Receiving Gifts (Mint) */}
            <LanguageCard 
              image="/gifts.jpg" 
              color="border-mintGreen"
              textColor="text-mintGreen"
              title="Receiving Gifts"
              desc="Visual symbols of love. It’s not about materialism; it’s about the thought and effort behind the gesture."
            />

            {/* Card 4: Acts of Service (Sky) */}
            <div className="lg:col-start-1 lg:ml-auto w-full"> 
              <LanguageCard 
                image="/service.jpg" 
                color="border-skyBlue"
                textColor="text-skyBlue"
                title="Acts of Service"
                desc="Actions speak louder than words. Anything you do to ease the burden of responsibilities speaks volumes to this hue."
              />
            </div>

            {/* Card 5: Physical Touch (Violet) */}
            <div className="lg:col-start-2 lg:mr-auto w-full">
              <LanguageCard 
                image="/touch.jpg" 
                color="border-violet"
                textColor="text-violet"
                title="Physical Touch"
                desc="To this hue, nothing speaks more deeply than appropriate touch. A hug, a pat on the back, or holding hands."
              />
            </div>

          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

// --- Sub Component for the Card ---
const LanguageCard = ({ image, title, desc, color, textColor }) => {
  
  const getShadowColor = (borderClass) => {
    if (borderClass.includes('coral')) return 'group-hover:shadow-coralPink/30';
    if (borderClass.includes('gold')) return 'group-hover:shadow-goldenYellow/30';
    if (borderClass.includes('mint')) return 'group-hover:shadow-mintGreen/30';
    if (borderClass.includes('sky')) return 'group-hover:shadow-skyBlue/30';
    if (borderClass.includes('violet')) return 'group-hover:shadow-violet/30';
    return 'group-hover:shadow-gray-400/30';
  };

  const shadowClass = getShadowColor(color);

  return (
    <div className={`group relative bg-white rounded-4xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${shadowClass}`}>
      
      {/* Image Container */}
      <div className="h-80 overflow-hidden relative">
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 bg-current ${textColor}`}></div>
        
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105"
          onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1516575150278-77136aed6920?auto=format&fit=crop&q=80&w=800'}}
        />
        
        {/* Floating Tag */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full z-20 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
           <span className={`font-body text-xs font-bold uppercase tracking-widest ${textColor}`}>
             The Hue
           </span>
        </div>
      </div>

      {/* Text Content */}
      <div className="p-8 relative">
        {/* Decorative Line */}
        <div className={`w-12 h-1 mb-6 rounded-full transition-all duration-500 group-hover:w-full ${textColor.replace('text-', 'bg-')}`}></div>

        <h3 className="font-heading text-3xl font-bold text-charcoal mb-3 leading-tight group-hover:text-charcoal transition-colors">
          {title}
        </h3>
        <p className="font-body text-mutedBlueGray text-sm leading-relaxed opacity-80 group-hover:opacity-100">
          {desc}
        </p>
      </div>
    </div>
  );
};
