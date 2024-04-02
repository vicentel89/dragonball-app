import { Suspense } from "react";

import "./globals.css";

export const metadata = {
  title: "Dragon Ball App",
  description: "Search for your favorite Dragon Ball characters",
  keywords: ["Dragon Ball", "characters", "search"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
