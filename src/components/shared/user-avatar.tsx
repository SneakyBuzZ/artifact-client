import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useAuth from "@/lib/stores/auth-store";

export default function UserAvatar() {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return null;
  }

  if (!user.profileUrl) {
    return (
      <Avatar>
        <AvatarFallback className="bg-neutral-800 text-white">
          {user.email?.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
    );
  }

  return (
    <Avatar>
      <AvatarImage src={user.profileUrl} />
      <AvatarFallback>user</AvatarFallback>
    </Avatar>
  );
}
