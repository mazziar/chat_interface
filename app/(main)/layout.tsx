import Providers from "@/core/provider";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>
    {children}
  </Providers>;
}
