import "./globals.css";
import Header from '../components/header';
import Footer from '../components/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
      <div className="min-h-screen flex flex-col">
      <Header/>
        <main className="flex-1">
            {children}
          </main>
        <Footer/>
      </div>
      </body>
    </html>
  );
}
