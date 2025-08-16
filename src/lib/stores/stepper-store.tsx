import { create } from "zustand";
import type { Step } from "../types/stepper-type";

type State = {
  steps: Step[];
  currentStep: number;
};

type Actions = {
  setSteps: (steps: Step[]) => void;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  previousStep: () => void;
  resetSteps: () => void;
};

const useStepper = create<State & Actions>((set) => ({
  steps: [],
  currentStep: 0,
  setSteps: (steps) => set(() => ({ steps })),
  setCurrentStep: (step) => set(() => ({ currentStep: step })),
  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, state.steps.length - 1),
    })),
  previousStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 0),
    })),
  resetSteps: () =>
    set(() => ({
      steps: [],
    })),
}));

export default useStepper;
