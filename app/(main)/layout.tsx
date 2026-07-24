import Providers from "@/core/provider";
import ThemeRegistry from "@/theme";
import MainLayout from "@/ui/layout/mainLayout";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>
    <ThemeRegistry>
      <MainLayout>
        {children}
      </MainLayout>
    </ThemeRegistry>
  </Providers>;
}
