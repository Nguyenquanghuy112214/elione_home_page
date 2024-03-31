import type { Metadata } from "next";
import "./globals.css";
import { AOSInit } from "@/lib/aos";
import GlobalStyles from "@/sass/GlobalStyles/GlobalStyles";
import { ToastProvider } from "@/provider/toaster-provider";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { ModalProvider } from "@/provider/modal-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <GlobalStyles>
          <body>
            <AOSInit />
            <ModalProvider />
            <ToastProvider />
            {children}
          </body>
        </GlobalStyles>
      </html>
    </SessionProvider>
  );
}
