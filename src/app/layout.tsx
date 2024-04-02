import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

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
        <Suspense>
          <header className="navbar bg-neutral">
            <Link href="/" title="Dragon Ball">
              <Image src="/logo.png" alt="" width={100} height={26} />
            </Link>
          </header>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
