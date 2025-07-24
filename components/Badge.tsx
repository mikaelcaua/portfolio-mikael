import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
}

export function Badge({ children, className = "", variant = "default" }: BadgeProps) {
  let base = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ";
  let variantClass = "";
  switch (variant) {
    case "secondary":
      variantClass = "bg-gray-100 text-gray-700";
      break;
    case "destructive":
      variantClass = "bg-red-100 text-red-700";
      break;
    case "outline":
      variantClass = "border border-gray-300 text-gray-700";
      break;
    default:
      variantClass = "bg-teal-500 text-white";
  }
  return <span className={`${base} ${variantClass} ${className}`}>{children}</span>;
} 