const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 left-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          
          {/* Logo Lockup */}
          <a href="/" className="shrink-0 flex items-center gap-3 hover:opacity-80 transition-opacity">
            {/* The Icon */}
            <img 
              src="/logo.png" 
              alt="LoveHue Icon" 
              className="h-10 w-auto object-contain" 
            />
            
            {/* The Wordmark */}
            <img 
              src="/word-logo.png" 
              alt="LoveHue" 
              className="h-6 w-auto object-contain mt-1" 
            />
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;