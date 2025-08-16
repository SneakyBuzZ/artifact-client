import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
  className?: string;
};

export const StepperNavigation: React.FC<Props> = ({
  currentStep,
  totalSteps,
  onNext,
  onBack,
  className = "",
}) => {
  return (
    <div
      className={cn("min-w-2xl max-w-3xl flex justify-between px-5", className)}
    >
      <Button variant={"outline"} disabled={currentStep === 0} onClick={onBack}>
        Back
      </Button>

      <Button onClick={onNext}>
        {currentStep === totalSteps - 1 ? "Finish" : "Next"}
      </Button>
    </div>
  );
};
