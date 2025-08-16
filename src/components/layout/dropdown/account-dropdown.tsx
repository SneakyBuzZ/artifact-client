import UserAvatar from "@/components/shared/user-avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function AccountDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-8 w-8 rounded-full p-0">
          <UserAvatar />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80 flex justify-center items-start gap-2 p-2"
        align="end"
      >
        <DropdownMenuGroup className="w-1/2 flex flex-col justify-start items-start px-4">
          <DropdownMenuLabel className="text-md px-0">
            Your Lists
          </DropdownMenuLabel>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuSeparator className="w-full" />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup className="w-1/2 flex flex-col justify-start items-start px-4 border-l">
          <DropdownMenuLabel className="text-md px-0">
            Your Account
          </DropdownMenuLabel>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
          <DropdownMenuSeparator className="w-full" />
          <DropdownMenuItem>Logout</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
