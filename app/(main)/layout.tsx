import Providers from "@/core/provider";
import ThemeRegistry from "@/theme";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>
    <ThemeRegistry>
      <main>
        {children}
      </main>
    </ThemeRegistry>
  </Providers>;
}
