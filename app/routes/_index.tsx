import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request)
  return null
}

export const meta: MetaFunction = () => {
  return [
    { title: "Kudos" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <h1 className="bg-slate-300">Welcome to Remix</h1>
  );
}
