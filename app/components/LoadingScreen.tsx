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
      <div className={`${s.logo} rounded-2xl bg-gradient-to-br from-[#B91C1C] to-[#991B1B] flex items-center justify-center text-white font-bold`}>
        <span className={`${s.text}`}>PC</span>
      </div>
      
      {showUnderline && (
        <div className="mt-3 relative overflow-hidden">
          <div className={`${s.underline} bg-[#B91C1C] rounded-full`} />
        </div>
      )}
    </div>
  );
}

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-gray-950 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#B91C1C] to-[#991B1B] flex items-center justify-center text-white text-2xl font-bold">
          PC
        </div>

        <div className="mt-4 w-20 h-1 overflow-hidden">
          <div className="h-full bg-[#B91C1C] rounded-full origin-left animate-[width_1.2s_ease-out_forwards]" />
        </div>
      </div>
    </div>
  );
}