import AuthContent from "@/components/layout/auth/auth-content";
import Logo from "@/components/shared/logo";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/auth") {
      throw redirect({ to: "/auth/login" });
    }
  },
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <section className="w-full h-screen relative flex flex-col justify-center items-center gap-3">
      <Logo withText className="absolute top-5 left-7" />
      <main className="flex flex-col items-center justify-center w-full -translate-y-6">
        <AuthContent />
        <Outlet />
      </main>
    </section>
  );
}
