import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/donate")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /donate!";
}
