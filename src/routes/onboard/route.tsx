import { Stepper } from "@/components/layout/stepper/stepper";
import ChooseRole from "@/components/sections/onboard/choose-role";
import OnboardFinish from "@/components/sections/onboard/onboard-finish";
import Preferences from "@/components/sections/onboard/preferences";
import VerifyAccount from "@/components/sections/onboard/verify-account";
import Logo from "@/components/shared/logo";
import { sendVerificationCode } from "@/lib/api";
import useAuth from "@/lib/stores/auth-store";
import useStepper from "@/lib/stores/stepper-store";
import type { Step } from "@/lib/types/stepper-type";
import { createFileRoute, redirect } from "@tanstack/react-router";

const steps: Step[] = [
  {
    id: 1,
    title: "Verify Account",
    content: <VerifyAccount />,
  },
  {
    id: 2,
    title: "Choose Role",
    content: <ChooseRole />,
  },
  {
    id: 3,
    title: "Set Preferences",
    content: <Preferences />,
  },
  {
    id: 4,
    title: "Finish",
    content: <OnboardFinish />,
  },
];

export const Route = createFileRoute("/onboard")({
  beforeLoad: async () => {
    const { setSteps, setCurrentStep } = useStepper.getState();
    const {
      user: { onBoardingStatus },
      isAuthenticated,
    } = useAuth.getState();

    setSteps(steps);

    if (!isAuthenticated) {
      throw redirect({ to: "/auth" });
    }

    if (onBoardingStatus === "REGISTERED_NOT_VERIFIED") {
      await sendVerificationCode();
    }

    if (onBoardingStatus === "EMAIL_VERIFIED_NO_ROLE") {
      setCurrentStep(1);
    } else if (
      onBoardingStatus === "ROLE_SELECTED_ARTIST" ||
      onBoardingStatus === "ROLE_SELECTED_CUSTOMER"
    ) {
      setCurrentStep(2);
    } else if (
      onBoardingStatus === "ARTIST_ONBOARDING_COMPLETE" ||
      onBoardingStatus === "CUSTOMER_ONBOARDING_COMPLETE"
    ) {
      setCurrentStep(3);
    }
  },
  component: RouteOnboard,
});

function RouteOnboard() {
  return (
    <section className="w-full min-h-svh flex items-center justify-center">
      <Logo withText className="absolute top-4 left-4" />
      <Stepper />
    </section>
  );
}
