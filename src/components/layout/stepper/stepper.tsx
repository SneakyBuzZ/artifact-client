import { StepIndicator } from "@/components/layout/stepper/step";
import { AnimatePresence, motion } from "framer-motion";
import useStepper from "@/lib/stores/stepper-store";

export const Stepper = () => {
  const { currentStep, steps } = useStepper();
  console.log(steps);

  return (
    <div className="w-full flex flex-col items-center justify-start py-10">
      {/* Step Indicators */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <StepIndicator
            key={step.id}
            step={index}
            currentStep={currentStep}
            title={step.title}
            isLastStep={index === steps.length - 1}
          />
        ))}
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          className="min-h-[400px] min-w-2xl max-w-3x h-full flex items-center justify-center"
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {steps[currentStep].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
