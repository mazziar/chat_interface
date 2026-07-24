import ThemeRegistry from "@/theme";
import MainLayout from "@/ui/layout/mainLayout";
import dynamic from "next/dynamic";

const Providers = dynamic(() => import('../../core/provider'), { ssr: !!false });

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
