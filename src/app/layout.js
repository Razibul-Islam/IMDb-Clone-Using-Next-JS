import Header from "@/Components/Header";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "IMDb Clone",
  description: "This is a IMDb Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header></Header>
          {/* Navbar */}

          {/* SearchBox */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
