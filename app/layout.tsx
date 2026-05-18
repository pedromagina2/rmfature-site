import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RMFature | Soluções Inteligentes de Faturamento e Gestão Financeira",
  description: "Automatize seu faturamento, emita notas fiscais e tenha controle total do seu dinheiro com eficiência e segurança.",
  keywords: "faturamento empresarial, automação financeira, emissão fiscal, gestão financeira, sistema de faturamento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0F172A] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}