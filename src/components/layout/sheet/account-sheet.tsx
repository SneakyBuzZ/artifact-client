import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { logout } from "@/lib/api";
import useAuth from "@/lib/stores/auth-store";

export function AccountSheet() {
  const { user } = useAuth();
  return (
    <Sheet>
      <SheetTrigger asChild className="flex items-center justify-center">
        <Button className="h-8 w-8 rounded-full p-0">
          {user.profileUrl ? (
            <>
              {" "}
              <img
                src={user?.profileUrl || "/default-avatar.png"}
                alt="User Avatar"
                className="h-8 w-8 rounded-full"
              />
            </>
          ) : (
            <>
              <span className="text-sm font-medium">
                {user?.email?.charAt(0).toUpperCase() || "U"}
              </span>
            </>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Account</SheetTitle>
          <SheetDescription>
            Manage your account settings and preferences.
          </SheetDescription>
        </SheetHeader>
        <Button onClick={logout}>Logout</Button>
      </SheetContent>
    </Sheet>
  );
}
