import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raam's Food - QR Ordering",
  description: "Beautiful restaurant landing page with QR code ordering"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-display bg-cream text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
