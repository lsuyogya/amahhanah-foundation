import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /contact!";
}