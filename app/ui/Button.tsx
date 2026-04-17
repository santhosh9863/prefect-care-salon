"use client";

import Link from "next/link";
import { ReactNode, MouseEvent } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 active:scale-90 active:shadow-inner disabled:opacity-50 disabled:cursor-not-allowed";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#B91C1C] text-white hover:bg-[#991B1B] hover:brightness-110 hover:shadow-xl hover:shadow-red-900/30 hover:scale-105",
  outline:
    "border-2 border-[#B91C1C] text-[#B91C1C] bg-transparent hover:bg-[#B91C1C]/5 hover:brightness-110 hover:scale-105",
  ghost:
    "text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:brightness-110 hover:scale-105",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-10 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  className = "",
  type = "button",
  fullWidth = false,
}: ButtonProps) {
  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty("--rx", `${x}%`);
    target.style.setProperty("--ry", `${y}%`);
    onClick?.();
  };

  if (href) {
    return (
      <Link href={href} className={`${classes} ripple`} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={handleClick} disabled={disabled} className={`${classes} ripple`}>
      {children}
    </button>
  );
}
