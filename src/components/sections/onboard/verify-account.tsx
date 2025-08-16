import VerifyForm from "@/components/forms/verify-form";

export default function VerifyAccount() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <h1 className="text-2xl font-bold">Verify Account</h1>
      <p className="text-sm text-neutral-700 mb-10">
        We've sent a code to your email. Please enter it below.
      </p>
      <VerifyForm />
    </main>
  );
}
