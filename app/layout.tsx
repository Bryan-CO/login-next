import "@/shared/styles/globals.css";
import { lato } from "./fonts";
import UseQueryProvider from "@/shared/components/UseQueryProvider";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Loyalty",
  description: "Loyalty app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`w-[1280px] h-[1140px] border border-solid border-black ${lato.className}`}>
        <UseQueryProvider>
          {children}
        </UseQueryProvider>
      </body>
    </html>
  );
}
