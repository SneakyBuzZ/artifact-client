import { cn } from "@/lib/utils";

interface SpinnerProps {
  colors?: [string, string, string, string, string];
  width?: string;
  className?: string;
}

const Spinner = ({ width = "14", className }: SpinnerProps) => {
  return (
    <img
      src="/assets/spinner.svg"
      alt="Loading..."
      width={width}
      height={width}
      className={cn("animate-spin", className)}
    />
  );
};

export default Spinner;
