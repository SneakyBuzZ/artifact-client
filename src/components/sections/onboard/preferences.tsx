import { useState } from "react";
import { Button } from "../../ui/button";
import {
  PreferencesList,
  type Preference,
  type PreferenceContentType,
  type PreferenceJson,
} from "@/lib/types/preference-type";
import { cn } from "@/lib/utils";
import { useSetPreferences } from "@/lib/api";
import Spinner from "../../shared/spinner";
import useStepper from "@/lib/stores/stepper-store";

export default function Preferences() {
  const [selectedPreferences, setSelectedPreferences] =
    useState<PreferenceJson>({});
  const { mutateAsync: setPreferences, isPending } = useSetPreferences();
  const { nextStep } = useStepper();

  const togglePreferenceValue = (type: Preference, value?: string) => {
    if (!value) return;

    setSelectedPreferences((prev) => {
      const current = prev[type] || [];
      const exists = current.includes(value);
      const updated = exists
        ? current.filter((v) => v !== value)
        : [...current, value];

      return {
        ...prev,
        [type]: updated,
      };
    });
  };

  const isSelected = (type: Preference, value?: string) => {
    if (!value) return false;
    return selectedPreferences[type]?.includes(value) ?? false;
  };

  const handleSavePreferences = async () => {
    await setPreferences(selectedPreferences);
    nextStep();
    setSelectedPreferences({});
  };

  return (
    <main className="flex flex-col items-center justify-center w-full py-10">
      <h1 className="text-2xl font-bold">Set Your Preferences</h1>
      <p className="text-sm text-neutral-700 mb-8">
        Customize your experience by setting your preferences below.
      </p>
      <div className="flex flex-col w-full max-w-3xl">
        <ul className="w-full space-y-10">
          {PreferencesList.map((preference) => (
            <PreferenceSection
              key={preference.id}
              preference={preference}
              onToggle={togglePreferenceValue}
              isSelected={isSelected}
            />
          ))}
        </ul>
        <Button onClick={handleSavePreferences} className="self-start mt-8">
          {isPending ? (
            <>
              <Spinner />
              Saving
            </>
          ) : (
            "Save Preferences"
          )}
        </Button>
        <p className="text-xs text-neutral-500 mt-2">
          Your preferences will help us tailor your experience.
        </p>
      </div>
    </main>
  );
}

function PreferenceSection({
  preference,
  onToggle,
  isSelected,
}: {
  preference: PreferenceContentType;
  onToggle: (type: Preference, value?: string) => void;
  isSelected: (type: Preference, value?: string) => boolean;
}) {
  return (
    <li className="w-full flex flex-col gap-4">
      <div className="flex flex-col">
        <h4 className="text-lg text-neutral-800 font-semibold">
          {preference.title}
        </h4>
        <p className="text-xs text-neutral-500">{preference.description}</p>
      </div>

      <ul className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {preference.picks.map((pick) => (
          <Button
            key={pick.id}
            variant={"outline"}
            className={cn(
              "flex items-center gap-2 text-sm",
              isSelected(preference.name, pick.value) &&
                "bg-neutral-200 border-neutral-500"
            )}
            onClick={() => onToggle(preference.name, pick.value)}
          >
            <pick.icon color={pick.iconColor} />
            {pick.name}
          </Button>
        ))}
      </ul>
    </li>
  );
}
