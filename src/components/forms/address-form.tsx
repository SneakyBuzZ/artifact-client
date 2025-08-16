import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "../ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StateList } from "@/lib/lists";
import { getCities } from "@/lib/api";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";

const formSchema = z.object({
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z
    .string()
    .length(6, "Zip code must be 6 digits")
    .regex(/^\d{6}$/, "Zip code must be numeric"),
});
const AddressForm = () => {
  const [cities, setCities] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });

  useEffect(() => {
    const fetchCities = async () => {
      if (form.watch().state) {
        const result = await getCities(form.watch().state);
        setCities(Array.isArray(result) ? result : []);
      } else {
        setCities([]);
      }
    };
    fetchCities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch().state, form]);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Form submitted with data:", data);
    form.reset();
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 min-w-xs md:min-w-lg"
        >
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter your address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-between items-center gap-3">
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>State</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(value)}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue
                          className="w-full"
                          placeholder="Select your state"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {StateList.map((state) => (
                        <SelectItem key={state.id} value={state.label}>
                          {state.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>City</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(value)}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger disabled={!cities.length}>
                        <SelectValue
                          className="w-full"
                          placeholder="Select your city"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-2">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AddressForm;
