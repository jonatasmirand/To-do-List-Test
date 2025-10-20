import type { Metadata } from "next";
import Footer from "@/components/Footer";
import styles from "./globals.module.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "To-do-list",
  description:
    "A To-do-list vai te ajudar a organizar as suas tarefas ou itens conta-los, editar e remover quando for preciso",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={styles.container}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
