import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-softWhite py-10 border-t border-mutedBlueGray/20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-3">

        <p className="font-body text-cloudGray/70 text-sm tracking-wide">
          "Love, in every Hue."
        </p>

        <div className="pt-4 mt-2">
          <p className="font-body text-xs text-mutedBlueGray uppercase tracking-widest">
            Developed by <span className="text-coralPink font-semibold">Iverene Grace</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;