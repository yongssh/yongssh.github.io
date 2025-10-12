import type { Metadata } from "next";
import { Inter, Zen_Old_Mincho } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const zenMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen-mincho",
});
export const metadata: Metadata = {
  title: "Yong-Yu Huang",
  description: "Yong-Yu Huang studies English literature and computer science at Northwestern University. Her writing can be found here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={zenMincho.className}>{children}</body>
    </html>
  );
}
