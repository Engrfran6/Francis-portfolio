import BottomNavbar from '@/components/navbar/BottomNavbar';

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <BottomNavbar />
      {children}
    </main>
  );
}
