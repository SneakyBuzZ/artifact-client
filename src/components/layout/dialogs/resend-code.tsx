import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useSendVerificationCode } from "@/lib/api";

export default function ResendCode() {
  const { mutateAsync: sendVerifyEmail, isPending } = useSendVerificationCode();

  const handleResend = async () => {
    await sendVerifyEmail();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-primary underline-offset-4 hover:underline cursor-pointer">
        Resend code?
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to resend the code?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This will send a new verification code to your email address. If you
            have not received the code, please check your spam folder or try
            resending it again.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleResend}>
            {isPending ? "Sending..." : "Resend Code"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
