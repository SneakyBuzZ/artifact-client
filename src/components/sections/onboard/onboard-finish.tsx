import AddressForm from "@/components/forms/address-form";

export default function OnboardFinish() {
  return (
    <main className="flex flex-col items-center justify-center w-full py-10">
      <h1 className="text-2xl font-bold">Finish Your Onboarding</h1>
      <p className="text-sm text-neutral-700 mb-8">
        To complete your onboarding, please provide your address details.
      </p>
      <AddressForm />
    </main>
  );
}
