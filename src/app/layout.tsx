import "./globals.css";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
      <Footer />
    </>
  );
}
