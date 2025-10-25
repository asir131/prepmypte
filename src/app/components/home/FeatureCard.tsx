import type React from "react";
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBackgroundColor: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  iconBackgroundColor,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg p-8 text-center bg-[#FAFAFB]">
      <div
        className="flex h-24 w-24 items-center justify-center rounded-full"
        style={{ backgroundColor: iconBackgroundColor }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
