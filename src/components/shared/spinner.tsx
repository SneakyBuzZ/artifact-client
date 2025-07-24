interface SpinnerProps {
  colors?: [string, string, string, string, string];
  width?: string;
}

const defaultColors: [string, string, string, string, string] = [
  "#FF2222",
  "#FFA3AF",
  "#CE1799",
  "#FFF6A2",
  "#F98E00",
];

const Spinner = ({ colors = defaultColors, width = "80" }: SpinnerProps) => {
  return (
    <div
      style={{
        width,
        height: width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      aria-label="custom-color-ring-loading"
    >
      <svg
        width={width}
        height={width}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {colors.map((color, index) => (
          <circle
            key={index}
            cx="50"
            cy="50"
            r={40 - index * 5}
            stroke={color}
            strokeWidth="4"
            fill="none"
            strokeDasharray="250"
            strokeDashoffset="0"
            style={{
              animation: `spin-${index} 1.5s linear infinite`,
              transformOrigin: "center",
            }}
          />
        ))}
      </svg>
      <style>{`
        ${colors
          .map(
            (_, index) => `
          @keyframes spin-${index} {
            0% {
              transform: rotate(0deg);
              stroke-dashoffset: 250;
            }
            100% {
              transform: rotate(360deg);
              stroke-dashoffset: 0;
            }
          }
        `
          )
          .join("\n")}
      `}</style>
    </div>
  );
};

export default Spinner;
