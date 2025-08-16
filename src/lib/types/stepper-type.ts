export type Step = {
  id: number;
  title: string;
  content: React.ReactNode;
};

export type StepperProps = {
  steps: Step[];
};
