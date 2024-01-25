import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "~/tailwind.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap"
          rel="stylesheet"
        ></link>
        <Meta />
        <Links />
      </head>
      <body className="p-6 font-roboto [text-shadow:_0_1px_0_rgb(0_0_0_/_10%)] text-xl">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        {/* diagonal rectangle in background */}
        <div
          className="fixed
                  top-[200px]
                  -left-32
                  w-14/7
                  h-200px
                  transform
                  -rotate-30
                  bg-gray-300
                  opacity-30
                  -z-10"
        ></div>
      </body>
    </html>
  );
}
