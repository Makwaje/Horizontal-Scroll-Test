import type { Metadata } from "next";
import "./styles.scss";

export const metadata: Metadata = {
  title: "Horizontal scroll test",
  description: "unusual website by makwaje",
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
