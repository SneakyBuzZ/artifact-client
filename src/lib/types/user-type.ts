export type User = {
  email: string | null;
  profileUrl: string | null;
  role: Role | null;
  onBoardingStatus: OnBoardingStatus | null;
};

export type OnBoardingStatus =
  | "REGISTERED_NOT_VERIFIED"
  | "EMAIL_VERIFIED_NO_ROLE"
  | "ROLE_SELECTED_BUYER"
  | "BUYER_ONBOARDING_COMPLETE"
  | "ROLE_SELECTED_ARTIST"
  | "ARTIST_ONBOARDING_COMPLETE"
  | "ONBOARDING_SKIPPED";

export type Role = "ARTIST" | "BUYER";
