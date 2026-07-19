import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

const handlers = makeRouteHandler({
  config,
});

function unavailable() {
  return new Response("Not Found", { status: 404 });
}

export async function GET(
  ...args: Parameters<typeof handlers.GET>
): Promise<Response> {
  if (process.env.NODE_ENV === "production") {
    return unavailable();
  }
  return handlers.GET(...args);
}

export async function POST(
  ...args: Parameters<typeof handlers.POST>
): Promise<Response> {
  if (process.env.NODE_ENV === "production") {
    return unavailable();
  }
  return handlers.POST(...args);
}
