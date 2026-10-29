import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  disabled?: boolean;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
}

export function CTAButton({
  children,
  variant = "primary",
  href,
  disabled = false,
  className = "",
  showArrow = false,
  onClick,
}: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-cyan text-white hover:bg-cyan/90 focus:ring-cyan disabled:bg-secondary-text disabled:cursor-not-allowed",
    secondary: "bg-navy text-white hover:bg-navy/90 focus:ring-navy disabled:bg-secondary-text disabled:cursor-not-allowed",
    outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white focus:ring-navy disabled:border-secondary-text disabled:text-secondary-text disabled:cursor-not-allowed",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight size={20} />}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      type="button"
    >
      {content}
    </button>
  );
}
