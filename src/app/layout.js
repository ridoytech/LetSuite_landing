import { Outfit, Poppins } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "let suite - Lettings Management System",
  description: "The complete feature set for a production-ready lettings management system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
