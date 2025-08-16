import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { useVerifyAccount } from "@/lib/api";
import useStepper from "@/lib/stores/stepper-store";
import { toast } from "sonner";
import ResendCode from "../layout/dialogs/resend-code";

const formSchema = z.object({
  code: z.string().min(6, "Code must be at least 6 characters long"),
});

export default function VerifyForm() {
  const { mutateAsync: verifyAccount } = useVerifyAccount();
  const { nextStep } = useStepper();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    await verifyAccount(data);
    nextStep();
    toast("Account verified successfully!", {
      cancel: "Close",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 min-w-xs "
      >
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="w-full">
                    <InputOTPSlot index={0}></InputOTPSlot>
                    <InputOTPSlot index={1}></InputOTPSlot>
                    <InputOTPSlot
                      index={2}
                      className="rounded-r-md"
                    ></InputOTPSlot>
                    <InputOTPSeparator className="text-neutral-500" />
                    <InputOTPSlot
                      index={3}
                      className="border-l rounded-l-md"
                    ></InputOTPSlot>
                    <InputOTPSlot index={4}></InputOTPSlot>
                    <InputOTPSlot index={5}></InputOTPSlot>
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col items-start gap-2 mt-3">
          <ResendCode />
          <Button type="submit" className="w-full mt-2">
            Verify
          </Button>
        </div>
      </form>
    </Form>
  );
}
