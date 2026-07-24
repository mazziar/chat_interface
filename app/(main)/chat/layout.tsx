import ChatLayout from "@/ui/layout/chatLayout";

export default function ChatRouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ChatLayout>{children}</ChatLayout>;
}
