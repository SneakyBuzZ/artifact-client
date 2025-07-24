import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { FcGoogle } from "react-icons/fc";

export default function AuthContent() {
  const { pathname } = useLocation();

  const isLogin = pathname.includes("/login");
  const authContent = isLogin
    ? {
        title: "Login to",
        description: "Don't have an account?",
        state: "Login",
      }
    : {
        title: "Register to",
        description: "Already have an account?",
        state: "Register",
      };

  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-4 text-left">
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-2xl font-semibold break-words">
          {authContent.title}{" "}
          <span className="font-logo tracking-tighter">artifact</span>
        </h1>
        <p className="text-sm text-neutral-700 break-words">
          {authContent.description}{" "}
          <Link
            to={
              authContent.state === "Register"
                ? "/auth/login"
                : "/auth/register"
            }
            className="text-blue-600 hover:underline ml-1"
          >
            {authContent.state === "Register" ? "Login" : "Create an account"}
          </Link>
        </p>
      </div>

      <Button
        className="relative w-full mt-2 bg-white/40 hover:bg-white/60 transition-colors"
        variant={"outline"}
      >
        <FcGoogle className="absolute left-5" />
        {authContent.state} in with Google
      </Button>

      <div className="flex items-center w-full my-3">
        <hr className="flex-grow border-t border-neutral-300" />
        <span className="px-3 text-sm text-neutral-700 font-medium select-none">
          OR
        </span>
        <hr className="flex-grow border-t border-neutral-300" />
      </div>
    </div>
  );
}
