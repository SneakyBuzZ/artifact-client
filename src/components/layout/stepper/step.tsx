import { Check } from "lucide-react";
import React from "react";

interface StepProps {
  step: number;
  currentStep: number;
  title: string;
  isLastStep: boolean;
}

export const StepIndicator: React.FC<StepProps> = ({
  step,
  currentStep,
  title,
  isLastStep,
}) => {
  const isActive = step === currentStep;
  const isCompleted = step < currentStep;

  return (
    <div className="flex items-center">
      <div
        className={`w-10 h-10 rounded-full text-neutral-500 flex items-center justify-center text-xl font-bold transition-all duration-300 ${
          isCompleted
            ? "gradient-bg-2 text-white"
            : isActive
              ? "gradient-text border border-neutral-400"
              : "border"
        }`}
      >
        {isCompleted ? <Check strokeWidth={5} size={16} /> : <>{step + 1}</>}
      </div>
      <span className="ml-2 text-sm font-medium">{title}</span>
      {!isLastStep && <div className="w-10 h-px bg-gray-300 mx-4" />}
    </div>
  );
};
