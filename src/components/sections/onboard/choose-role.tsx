import type { Role } from "@/lib/types/user-type";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../../ui/button";
import { useAssignRole } from "@/lib/api";
import Spinner from "../../shared/spinner";

const Roles = [
  {
    name: "Customer",
    description:
      "As a customer, you can browse and purchase artworks from various artists.",
    role: "CUSTOMER",
  },
  {
    name: "Artist",
    description:
      "As an artist, you can create and showcase your artwork to the world.",
    role: "ARTIST",
  },
];

export default function ChooseRole() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const { mutateAsync: assignRole, isPending } = useAssignRole();

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
  };

  const handleProceed = async () => {
    await assignRole({ role: selectedRole as Role });
  };
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <h1 className="text-2xl font-bold">Choose Your Role</h1>
      <p className="text-sm text-neutral-700 mb-10">
        Please select your role to continue with the onboarding process.
      </p>
      <ul className="w-lg flex flex-col justify-center items-center gap-3">
        {Roles.map((role, index) => (
          <li
            onClick={() => handleRoleSelect(role.role as Role)}
            key={index}
            className={cn(
              "w-full p-4 border rounded-lg flex justify-between items-center cursor-pointer hover:bg-amber-50/50 transition-colors",
              selectedRole === role.role
                ? "border-neutral-600"
                : "border-neutral-400"
            )}
          >
            <div className="flex flex-col">
              <h4 className="text-lg text-neutral-600 font-semibold">
                {role.name}
              </h4>
              <p className="text-xs text-neutral-500">{role.description}</p>
            </div>
            <div className="h-5 w-5 rounded-full p-1 border border-neutral-500 flex items-center justify-center">
              {selectedRole === role.role ? (
                <div className="w-full h-full gradient-bg-2 rounded-full"></div>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
      <Button
        onClick={handleProceed}
        className="w-lg mt-8"
        disabled={selectedRole == null}
      >
        {isPending ? (
          <>
            <Spinner />
            Loading
          </>
        ) : (
          "Proceed"
        )}
      </Button>
    </main>
  );
}
