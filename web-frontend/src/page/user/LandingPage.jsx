import React from "react";
import NavBar from "../../components/ui/navbar";
import PrimaryButton from "../../components/ui/primarybutton";
import FeatureCard from "../../components/ui/card";
import carImage from "../../assets/carm-removebg-preview (1).png";

const LandingPage = () => {
  const handleExplore = () => {
    window.location.href = "/listing";
  };

  const handleOrder = () => {
    window.location.href = "/order";
  };

  const features = [
    {
      icon: "⚡",
      title: "QUANTUM PERFORMANCE",
      description: "Experience raw power and precision with next-gen acceleration.",
    },
    {
      icon: "🧠",
      title: "NEURAL AUTOPILOT",
      description: "Adaptive AI systems for intelligent handling.",
    },
    {
      icon: "🌌",
      title: "HOLOGRAPHIC INTERFACE",
      description: "Immersive cockpit display with live vehicle data.",
    },
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-br from-emerald-950 via-gray-900 to-teal-900">
      <NavBar />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden">

        {/* Multi-layer Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-gray-900 to-teal-800"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/60 via-transparent to-emerald-500/40 opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950 opacity-70"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent animate-pulse-slow"></div>

        <div className="absolute inset-0 overflow-hidden flex items-start justify-center -mt-8">
          <img
            src={carImage}
            alt="McLaren GT-X"
            className="w-auto h-[90vh] object-contain transform scale-110 hover:scale-115 transition-transform duration-[5000ms]"
            loading="lazy"
          />
        </div>

        {/* Enhanced Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/15 via-transparent to-teal-400/10"></div>
        
        {/* Animated floating elements with gradients */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-float shadow-lg shadow-emerald-400/30"></div>
        <div className="absolute bottom-40 right-20 w-2 h-2 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full animate-float-delayed shadow-lg shadow-teal-400/30"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-gradient-to-br from-emerald-400 to-transparent rounded-full animate-float-slow"></div>

        {/* Text Overlay */}
        <div className="absolute top-29 left-1/2 transform -translate-x-1/2 z-10 text-center w-full px-6 md:px-20">
          <div className="space-y-4 animate-fade-in-up max-w-4xl mx-auto">
          
            <h1 className="text-4xl md:text-6xl font-black uppercase text-white drop-shadow-2xl leading-[0.9] tracking-tight">
              MCLAREN{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
                GT-X
              </span>
            </h1>

            <p className="text-gray-300 text-base leading-relaxed font-light max-w-2xl mx-auto backdrop-blur-sm bg-gray-900/40 p-4 rounded-xl border-l-2 border-emerald-400/50">
              The ELECTRIC SUPERCAR that redefines performance and design.
              With a top speed exceeding 220 MPH and a range of 370 MILES.
            </p>
          </div>
        </div>

        <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 z-10 w-full px-4 md:px-20">
          <div className="flex flex-row justify-center items-center gap-5 max-w-3xl mx-auto flex-wrap">

            {/* Primary Emerald Button */}
            <PrimaryButton
              label="QUANTUM RESERVE"
              onClick={handleOrder}
              className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 
                        text-white font-semibold rounded-xl px-8 py-4 
                        shadow-[0_0_20px_rgba(16,185,129,0.3)] 
                        hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-600 
                        hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] 
                        transform hover:scale-105 transition-all duration-500"
            />

            {/* Outline Button with Emerald Border */}
            <PrimaryButton
              label="EXPLORE SPECS"
              onClick={handleExplore}
              type="outline"
              className="border border-emerald-500/60 text-emerald-300 
                        rounded-xl px-8 py-4 font-semibold
                        hover:text-white hover:border-emerald-400 
                        hover:bg-gradient-to-r hover:from-emerald-700 hover:to-teal-800 
                        hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] 
                        transform hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Enhanced McLaren Aerodynamic Design Section */}
      <section className="relative w-full bg-gradient-to-br from-black via-gray-900 to-emerald-950 py-24 md:py-32 overflow-hidden">
        {/* Enhanced background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-emerald-950/30"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl animate-pulse-delayed"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10">
          
          {/* Header Section */}
          <div className="text-center mb-4">
            <h3 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-white">
              Performance by <span className="text-emerald-400">Design</span>
            </h3>
            <div className="w-24 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-4"></div>
          </div>

          {/* Main Description - Modern Gradient Design */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative group">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-emerald-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl p-12 rounded-2xl border border-emerald-400/20 shadow-2xl group-hover:border-emerald-400/40 transition-all duration-500">
                <div className="text-center">
                  {/* Decorative Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl">⚡</span>
                  </div>
                  
                  {/* Text Content */}
                  <p className="text-gray-200 text-xl leading-relaxed font-light">
                    The exterior design combines <span className="text-emerald-300 font-semibold">shrink-wrapped organic surfaces</span> on top with sharp, 
                    technical aerodynamic devices below. Our <span className="text-teal-300 font-semibold">Formula 1-inspired side pods</span> work in perfect 
                    harmony with the exterior surfaces to guide airflow around the <span className="text-emerald-300 font-semibold">McLaren Aerocell</span>, 
                    featuring the new <span className="text-teal-300 font-semibold">McLaren Anhedral doors</span> with integrated aero blades — not just a 
                    theatrical feature but also a crucial part of the aerodynamic package.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Right Content - Video & Visual - Moved to top position */}
            <div className="space-y-8 order-2 lg:order-1">
              
              {/* Main Video - Expanded */}
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                <video
                  src="https://cars.mclaren.com/content/dam/mclaren-automotive/bp/video/w1-anhedral-door-opening.mp4"
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-[500px] md:h-[650px] object-cover relative z-10 opacity-85 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center border-2 border-white/40">
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "220+", label: "MPH TOP SPEED" },
                  { value: "2.8s", label: "0-60 MPH" },
                  { value: "370mi", label: "RANGE" }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl backdrop-blur-sm bg-gray-900/40 border border-emerald-400/10 hover:border-emerald-400/30 transition-all duration-300"
                  >
                    <div className="text-2xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Content - Feature Highlights */}
            <div className="space-y-8 order-1 lg:order-2">
              {/* Feature Highlights - Single column on left side only */}
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "AERO BLADES",
                    description: "Integrated aerodynamic components",
                    icon: "↗"
                  },
                  {
                    title: "SIDE PODS",
                    description: "F1-inspired airflow management",
                    icon: "⚡"
                  },
                  {
                    title: "ANHEDRAL DOORS",
                    description: "Precision-engineered entry system",
                    icon: "🚪"
                  },
                  {
                    title: "AEROCELL",
                    description: "Advanced airflow channeling",
                    icon: "🌪"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl backdrop-blur-sm bg-gray-900/40 border border-emerald-400/10 hover:border-emerald-400/30 transition-all duration-300 group hover:transform hover:scale-105"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center text-white text-lg group-hover:rotate-12 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Performance Statement */}
              <div className="pt-6">
                <p className="text-emerald-300 text-2xl font-bold italic border-t border-emerald-400/20 pt-6">
                  "Performance by design at its very best."
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button className="px-12 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-full hover:from-emerald-400 hover:to-teal-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-400/30 uppercase tracking-wide text-sm">
              Explore Aerodynamic Technology
            </button>
          </div>
        </div>
      </section>

      {/* McLaren Force Section - Aesthetic Version */}
      <section className="relative w-full min-h-[80vh] bg-gradient-to-br from-black via-gray-900 to-black flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-24 overflow-hidden">

        {/* Glow accent behind text */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_60%)] pointer-events-none"></div>

        {/* Left Text */}
        <div className="md:w-1/2 w-full text-left space-y-6 z-10">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-4 tracking-tight text-white">
            THE FULL FORCE OF
          </h2>
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 tracking-tight text-emerald-400">
            mclaren
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-transparent rounded-full"></div>
        </div>

        {/* Right Description - Expanded Size */}
        <div className="md:w-[55%] w-full mt-10 md:mt-0 text-gray-300 leading-relaxed font-light text-3xl max-w-3xl z-10 backdrop-blur-sm bg-gray-900/40 p-12 rounded-3xl border-2 border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.1)] ml-auto">
          <p className="mb-16 text-right text-2xl md:text-3xl leading-relaxed">
            Super-light engineering. Extreme power.<br />
            Race-honed agility.<br />
            <br />
            Every detail is precision-crafted to deliver<br />
            the ultimate driving thrill — pure, raw,<br />
            and unmistakably McLaren.
          </p>

          <div className="flex justify-end">
            <button className="uppercase tracking-widest px-16 py-6 border-2 border-emerald-400/60 text-gray-200 hover:text-emerald-300 hover:border-emerald-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.8)] rounded-full transition-all duration-500 ease-in-out text-2xl font-bold hover:scale-110">
              Discover
            </button>
          </div>
        </div>

        {/* Floating Enquiry Button */}
        <div className="hidden md:flex absolute right-6 bottom-10">
          <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-400/50 transition-all duration-300 text-lg hover:scale-110">
            Start Enquiry
          </button>
        </div>
      </section>

      {/* CTA Section with Radial Gradient */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-gray-950 to-emerald-950 relative overflow-hidden">
        {/* Multi-layer radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400/20 via-gray-950 to-gray-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-teal-400/15 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/60 to-gray-950"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-8 tracking-tight">
            READY FOR THE{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
              QUANTUM LEAP
            </span>
            ?
          </h2>
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto font-light bg-gray-900/40 p-8 rounded-2xl backdrop-blur-sm">
            Join the exclusive list of pioneers who will experience the future of supercars.
          </p>
          <PrimaryButton 
            label="RESERVE YOURS NOW" 
            onClick={handleOrder}
            className="text-lg px-12 py-5 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-emerald-500/50 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold hover:from-emerald-400 hover:to-teal-500 hover:shadow-emerald-400/60"
          />
        </div>
      </section>

      {/* Footer Section (Background Removed) */}
      <footer className="bg-transparent border-t border-emerald-400/10 text-gray-400 px-6 md:px-20 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-5 gap-10 text-sm">
            {[
              {
                title: "Explore",
                items: ["Models", "McLaren Sport", "Electric Series", "Supercar Collection", "Concept Vision", "Subscribe to updates"]
              },
              {
                title: "Shop",
                items: ["Offers", "Find a dealer", "New inventory", "Pre-owned", "Certified models", "Compare vehicles"]
              },
              {
                title: "Buy",
                items: ["Contact dealer", "Trade-in value", "Leasing", "Financing", "Elite program"]
              },
              {
                title: "Own",
                items: ["myMcLaren", "Financial Services", "Accessories", "Connected App", "Maintenance Plans", "Roadside Assistance"]
              },
              {
                title: "Support",
                items: ["Contact Us", "Help", "About McLaren", "Careers", "Recalls", "Battery Information"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h3 className="text-white font-bold mb-6 text-base border-l-4 border-emerald-400 pl-3">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="hover:bg-gradient-to-r hover:from-emerald-400/10 hover:to-teal-400/5 cursor-pointer transition-all duration-300 transform hover:translate-x-2 p-2 rounded-lg group"
                    >
                      <span className="text-gray-400 group-hover:text-emerald-300 font-medium text-sm transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center mt-20 space-x-8">
            {['f', 'X', '▶', 'in'].map((icon, index) => (
              <div 
                key={index}
                className="w-14 h-14 bg-transparent border border-emerald-400/30 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-emerald-400 hover:to-teal-500 cursor-pointer transition-all duration-300 transform hover:scale-110 group shadow-lg hover:shadow-emerald-400/40"
              >
                <span className="text-gray-400 group-hover:text-white font-bold text-lg transition-colors duration-300">
                  {icon}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Info (No Background) */}
          <div className="mt-16 text-gray-500 text-center space-y-6 border-t border-emerald-400/10 pt-12">
            <p className="text-sm">
              © {new Date().getFullYear()} McLaren Motors. All rights reserved.
            </p>

            <div className="flex justify-center space-x-8 flex-wrap">
              {["Terms of service", "Privacy statement", "Cookie settings", "Accessibility", "Whistleblower system"].map((item, index) => (
                <span 
                  key={index}
                  className="hover:text-emerald-400 cursor-pointer transition-colors duration-300 px-3 py-1 rounded-lg text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="max-w-4xl mx-auto leading-relaxed text-sm font-light">
              McLaren Motors makes every effort to ensure accuracy of information. Some vehicle
              specifications shown are for illustration only and may include features not available
              in all regions. Please consult your dealer for full details.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;