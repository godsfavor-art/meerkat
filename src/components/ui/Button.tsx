import React from "react";
import { ArrowUpRight, Loader2, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Button variant types
type ButtonVariant = "primary" | "secondary" | "orange" | "blue" | "purple" | "chocolate" | "outline" | "ghost";

type ButtonSize = "sm" | "md" | "lg";

// Button props interface
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  icon?: LucideIcon | null;
  iconPosition?: "left" | "right";
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  className?: string;
}

// Exact design variant styles
const buttonVariants: Record<ButtonVariant, string> = {
  // Exact match to your design
  // bg-gradient-to-b from-[#C85A5A] via-[#B54848] to-[#A03838]
  primary: `
    bg-[#FF6900]
    hover:from-[#D66666] hover:via-[#C85A5A] hover:to-[#B54848]
    active:from-[#A03838] active:via-[#8E2F2F] active:to-[#7A2626]
    text-white font-bold text-xl
    shadow-[8px_4px_0_0_#01454E,0_8px_12px_0_rgba(0,0,0,0.15)]
    hover:shadow-[0_4px_0_0_#01454E,0_12px_20px_0_rgba(0,0,0,0.25)]
    active:shadow-[0_2px_0_0_#01454E,0_4px_8px_0_rgba(0,0,0,0.2)]
    active:translate-y-[2px]
    border-2 border-[#8E2F2F]
  `,
  secondary: `
    bg-[#33B0C0]
    hover:from-[#D66666] hover:via-[#C85A5A] hover:to-[#B54848]
    active:from-[#A03838] active:via-[#8E2F2F] active:to-[#7A2626]
    text-white font-bold text-xl
    shadow-[8px_4px_0_0_#01454E,0_8px_12px_0_rgba(0,0,0,0.15)]
    hover:shadow-[0_4px_0_0_#01454E,0_12px_20px_0_rgba(0,0,0,0.25)]
    active:shadow-[0_2px_0_0_#01454E,0_4px_8px_0_rgba(0,0,0,0.2)]
    active:translate-y-[2px]
    border-2 border-[#01454E]
  `,
  orange: `
    bg-[#7FFE69]
    hover:from-[#D66666] hover:via-[#C85A5A] hover:to-[#B54848]
    active:from-[#A03838] active:via-[#8E2F2F] active:to-[#7A2626]
    text-white font-bold text-xl
    shadow-[8px_4px_0_0_#000000,0_8px_12px_0_rgba(0,0,0,0.15)]
    hover:shadow-[0_4px_0_0_#000000,0_12px_20px_0_rgba(0,0,0,0.25)]
    active:shadow-[0_2px_0_0_#000000,0_4px_8px_0_rgba(0,0,0,0.2)]
    active:translate-y-[2px]
    border-2 border-[#000000]
  `,
  blue: `
    bg-[#2962FF]
    hover:from-[#D66666] hover:via-[#C85A5A] hover:to-[#B54848]
    active:from-[#A03838] active:via-[#8E2F2F] active:to-[#7A2626]
    text-white font-bold text-xl
    shadow-[8px_4px_0_0_#E0E0E0,0_8px_12px_0_rgba(0,0,0,0.15)]
    hover:shadow-[0_4px_0_0_#E0E0E0,0_12px_20px_0_rgba(0,0,0,0.25)]
    active:shadow-[0_2px_0_0_#E0E0E0,0_4px_8px_0_rgba(0,0,0,0.2)]
    active:translate-y-[2px]
    border-2 border-[#E0E0E0]
  `,
  purple: `
    bg-[#A184C4]
    hover:from-[#D66666] hover:via-[#C85A5A] hover:to-[#B54848]
    active:from-[#A03838] active:via-[#8E2F2F] active:to-[#7A2626]
    text-white font-bold text-xl
    shadow-[8px_4px_0_0_#000000,0_8px_12px_0_rgba(0,0,0,0.15)]
    hover:shadow-[0_4px_0_0_#000000,0_12px_20px_0_rgba(0,0,0,0.25)]
    active:shadow-[0_2px_0_0_#000000,0_4px_8px_0_rgba(0,0,0,0.2)]
    active:translate-y-[2px]
    border-2 border-[#000000]
  `,
  chocolate: `
    bg-[#4E342E]
    hover:from-[#D66666] hover:via-[#C85A5A] hover:to-[#B54848]
    active:from-[#A03838] active:via-[#8E2F2F] active:to-[#7A2626]
    text-white font-bold text-xl
    shadow-[8px_4px_0_0_#000000,0_8px_12px_0_rgba(0,0,0,0.15)]
    hover:shadow-[0_4px_0_0_#000000,0_12px_20px_0_rgba(0,0,0,0.25)]
    active:shadow-[0_2px_0_0_#000000,0_4px_8px_0_rgba(0,0,0,0.2)]
    active:translate-y-[2px]
    border-2 border-[#000000]
  `,
  outline:
    "border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent",
  ghost: "hover:bg-gray-100 text-gray-700 hover:text-gray-900 bg-transparent",
};

// Size styles - matched to your design proportions
const buttonSizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-full min-h-[40px]",
  md: "px-6 py-3 text-base rounded-full min-h-[50px] uppercase", // Your design size
  lg: "px-8 py-4 text-lg rounded-full min-h-[60px]",
};

// Icon sizes
const iconSizes: Record<ButtonSize, number> = {
  sm: 16,
  md: 18,
  lg: 20,
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  icon = ArrowUpRight,
  iconPosition,
  href,
  external = false,
  fullWidth = false,
  className,
  onClick,
  ...props
}) => {
  // Base button styles
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-bold tracking-wide
    transition-all duration-150 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    select-none cursor-pointer
    relative
  `;

  // Combine all styles
  const buttonStyles = cn(
    baseStyles,
    buttonVariants[variant],
    buttonSizes[size],
    fullWidth && "w-full",
    (disabled || loading) &&
      "opacity-50 cursor-not-allowed hover:transform-none active:transform-none",
    className
  );

  // Icon component with proper sizing
  const IconComponent = loading ? Loader2 : icon;
  const iconSize = iconSizes[size];

  // Button content
  const ButtonContent = () => (
    <div className="flex items-center gap-3">
      {iconPosition === "left" && !loading && IconComponent && (
        <IconComponent size={iconSize} className="flex-shrink-0" />
      )}

      {loading && (
        <Loader2 size={iconSize} className="animate-spin flex-shrink-0" />
      )}

      <span className="whitespace-nowrap font-heading text-xl pt-1">{children}</span>

      {iconPosition === "right" && !loading && IconComponent && (
        <IconComponent size={iconSize} className="flex-shrink-0" />
      )}
    </div>
  );

  // Handle link-style buttons
  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={buttonStyles}
      >
        <ButtonContent />
      </a>
    );
  }

  // Regular button
  return (
    <button
      className={buttonStyles}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      <ButtonContent />
    </button>
  );
};


export default Button