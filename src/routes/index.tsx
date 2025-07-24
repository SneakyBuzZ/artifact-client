import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { getUser } from "@/lib/api";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    return await getUser();
  },
  component: RouteIndex,
});

function RouteIndex() {
  return (
    <section className="w-full">
      <Navbar />
      <main className="flex w-full flex-col items-center justify-center px-6">
        <Hero />
        <div className="flex w-full justify-center items-center gap-2 py-5 overflow-x-auto scroll-bar-hidden">
          <Button variant={"outline"}>Abstract</Button>
          <Button variant={"outline"}>Contemporary</Button>
          <Button variant={"outline"}>Digital</Button>
          <Button variant={"outline"}>Mixed Media</Button>
          <Button variant={"outline"}>Photography</Button>
          <Button variant={"outline"}>Traditional</Button>
          <Button variant={"outline"}>All Categories</Button>
          <Button variant={"outline"}>Artists</Button>
          <Button variant={"outline"}>Collections</Button>
          <Button variant={"outline"}>Exhibitions</Button>
        </div>
      </main>
    </section>
  );
}
