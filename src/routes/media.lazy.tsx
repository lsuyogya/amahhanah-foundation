import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/media")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /media!";
}
