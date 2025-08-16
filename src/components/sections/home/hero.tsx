import { Link } from "@tanstack/react-router";

export default function Hero() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-8 pb-10 border-b gradient-bg">
      <h2 className="text-white text-3xl md:text-5xl font-extrabold text-center mb-4">
        Discover Unique Art from Emerging Artists Worldwide
      </h2>
      <p className="text-sm md:text-lg text-center max-w-3xl text-neutral-700">
        Explore hand-picked paintings, digital illustrations, and mixed media
        from top creators. Every piece tells a story.
      </p>
      <Link to="/onboard">Onboard</Link>
    </div>
  );
}
