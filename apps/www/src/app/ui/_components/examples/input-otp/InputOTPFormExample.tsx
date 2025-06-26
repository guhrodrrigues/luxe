"use client";

import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/app/_components/ui/input-otp";
import { Button } from "@/app/_components/ui/button";
import { cn } from "@/utils/cn";

const formSchema = z.object({
  pin: z.string().min(6, {
    message: "Your password must have 6 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export function InputOTPFormExample() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: FormData) {
    alert(`Your password is: ${data.pin}`);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-2/3">
      <h1
        className={cn(
          "text-primary text-sm mb-2",
          errors.pin && "text-red-400",
        )}
      >
        One-time Password
      </h1>
      <Controller
        control={control}
        name="pin"
        render={({ field }) => (
          <InputOTP maxLength={6} {...field}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        )}
      />
      {errors.pin && (
        <p className="text-sm text-red-400 mt-2">{errors.pin.message}</p>
      )}
      <Button type="submit" className="mt-4">
        Submit
      </Button>
    </form>
  );
}
