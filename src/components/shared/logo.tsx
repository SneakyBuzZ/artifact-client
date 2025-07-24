import { cn } from "@/lib//utils";
import { Link } from "@tanstack/react-router";

interface LogoProps {
  withText?: boolean;
  imgClassName?: string;
  className?: string;
}

const Logo = ({ withText = false, imgClassName, className }: LogoProps) => {
  if (!withText) {
    return (
      <Link
        to="/"
        className={cn("flex justify-start items-center gap-1", className)}
      >
        <img
          src="/assets/logo.svg"
          alt="LOGO"
          className={cn("size-5", imgClassName)}
        />
      </Link>
    );
  }

  return (
    <Link to="/">
      <div
        className={cn(
          "flex justify-start items-center -translate-x-1",
          className
        )}
      >
        <img
          src="/assets/logo.svg"
          alt="LOGO"
          className={cn("size-5 md:size-7", imgClassName)}
        />
        <span className="tracking-tighter font-medium text-xl md:text-2xl font-logo text-neutral-800">
          artifact
        </span>
      </div>
    </Link>
  );
};

export default Logo;
