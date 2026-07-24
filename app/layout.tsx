import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doodle chat",
  description: "designed by Maziar Asadicordshooli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}
