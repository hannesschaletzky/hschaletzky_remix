import { useLocation } from "@remix-run/react";

// small link back to the index, shown on every page except the index itself
export default function HomeLink() {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  return (
    <a
      href="/"
      className="fixed top-3 left-3 z-10 text-base px-2 py-1 rounded-lg bg-white/80"
    >
      <u>← home</u>
    </a>
  );
}
