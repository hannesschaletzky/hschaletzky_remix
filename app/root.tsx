import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import HomeLink from "~/components/homeLink";
import styles from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  // favicons
  { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/site.webmanifest" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#15233A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap"
          rel="stylesheet"
        ></link>
        <Meta />
        <Links />
      </head>
      <body className="font-roboto [text-shadow:_0_1px_0_rgb(0_0_0_/_10%)] text-xl">
        <HomeLink />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        {/* diagonal rectangle from left bottom to top right */}
        <div
          className="fixed
                  top-[400px]
                  lg:top-[400px]
                  -left-32
                  w-14/7
                  h-150px
                  transform
                  -rotate-30
                  bg-gray-300
                  opacity-30
                  -z-10"
        ></div>
        {/* diagonal rectangle from left top to bottom right */}
        <div
          className="fixed
                  top-[200px]
                  lg:top-[400px]
                  -left-32
                  w-14/7
                  h-150px
                  transform
                  rotate-45
                  bg-gray-200
                  opacity-30
                  -z-10"
        ></div>
      </body>
    </html>
  );
}
