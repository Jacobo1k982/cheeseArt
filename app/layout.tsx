import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Lactea Selecta | Productos Lácteos Artesanales",
  description: "Descubre nuestra selección de quesos artesanales y productos lácteos premium. Tradición, calidad y sabor en cada bocado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream font-sans text-charcoal antialiased custom-scrollbar">
        {children}
      </body>
    </html>
  );
}