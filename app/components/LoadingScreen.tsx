"use client";

interface LogoAnimationProps {
  size?: "sm" | "md" | "lg";
  showUnderline?: boolean;
  className?: string;
}

export function LogoAnimation({ size = "md", showUnderline = true, className = "" }: LogoAnimationProps) {
  const sizes = {
    sm: { logo: "w-12 h-12", text: "text-xl", underline: "h-0.5 w-16" },
    md: { logo: "w-16 h-16", text: "text-2xl", underline: "h-1 w-20" },
    lg: { logo: "w-20 h-20", text: "text-3xl", underline: "h-1 w-24" },
  };

  const s = sizes[size];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`${s.logo} rounded-2xl bg-gradient-to-br from-[#B91C1C] to-[#991B1B] flex items-center justify-center text-white font-bold shadow-2xl shadow-red-900/40 animate-logo-reveal`}>
        <span className={`${s.text}`}>PC</span>
      </div>
      
      {showUnderline && (
        <div className="mt-3 relative">
          <div className={`${s.underline} bg-gradient-to-r from-[#B91C1C] to-red-500 rounded-full animate-underline-grow animate-glow-pulse`} />
        </div>
      )}
    </div>
  );
}

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B91C1C]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#B91C1C]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="animate-logo-reveal">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#B91C1C] to-[#991B1B] flex items-center justify-center text-white text-2xl font-bold shadow-2xl shadow-red-900/50">
            PC
          </div>
        </div>

        <div className="mt-4 relative">
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wide animate-brand-fade" style={{ animationDelay: "0.3s" }}>
            <span className="text-white/90">Perfect</span>{" "}
            <span className="bg-gradient-to-r from-[#B91C1C] via-red-500 to-[#B91C1C] bg-clip-text text-transparent">
              Care
            </span>
          </h1>
          
          <div className="mt-2 h-1 w-0 mx-auto bg-gradient-to-r from-transparent via-[#B91C1C] to-transparent rounded-full animate-underline-grow animate-glow-pulse" />
        </div>

        <p className="mt-6 text-gray-400 text-sm tracking-[0.3em] uppercase animate-fade-in-stagger" style={{ animationDelay: "0.6s" }}>
          Family Salon
        </p>

        <div className="mt-12 flex items-center gap-2 animate-fade-in-stagger" style={{ animationDelay: "0.9s" }}>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-gray-500 text-xs">Preparing your experience...</span>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="w-48 h-0.5 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-transparent via-[#B91C1C] to-transparent animate-[shimmer_2s_ease-in-out_infinite]" style={{
            animation: 'shimmer 2s ease-in-out infinite'
          }} />
        </div>
      </div>
    </div>
  );
}
