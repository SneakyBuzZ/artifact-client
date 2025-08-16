import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import Logo from "@/components/shared/logo";
import { ShoppingCartIcon, TextOutdentIcon } from "@phosphor-icons/react";
import { NavbarList } from "@/lib/lists";
import useAuth from "@/lib/stores/auth-store";
import { AccountSheet } from "./sheet/account-sheet";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  return (
    <nav className="w-full sticky top-0 z-50 h-[48px] md:h-[55px] flex justify-between items-center bg-none backdrop-blur-lg border-b px-16">
      <Logo withText />
      <div className="flex justify-start items-center gap-10">
        <ul className="hidden md:flex justify-start items-center gap-5">
          {NavbarList.map((item) => (
            <Link
              key={item.id}
              to={item.route}
              className="text-neutral-800 hover:text-black transition-colors text-[15px]"
            >
              {item.label}
            </Link>
          ))}
        </ul>
        {isAuthenticated ? (
          <div className="hidden md:flex justify-start items-center gap-5">
            <AccountSheet />
            <ShoppingCartIcon className="size-5 cursor-pointer" />
          </div>
        ) : (
          <>
            <div className="hidden md:flex justify-start items-center gap-2">
              <Button
                onClick={() => navigate({ to: "/auth/login" })}
                variant={"ghost"}
              >
                Login
              </Button>
              <Button onClick={() => navigate({ to: "/auth/register" })}>
                Register
              </Button>
            </div>
          </>
        )}

        <TextOutdentIcon className="size-5 md:hidden" color="#000" />
      </div>
    </nav>
  );
};

export default Navbar;
