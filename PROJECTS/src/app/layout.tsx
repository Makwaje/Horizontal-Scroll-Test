import type { Metadata } from "next";
import "@/styles/reset.css";

export const metadata: Metadata = {
  title: "FLIRTY FLOWERS",
  description: "Creative website by makwaje",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
