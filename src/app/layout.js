import Header from "@/Components/Header";
import "./globals.css";

export const metadata = {
  title: "IMDb Clone",
  description: "This is a IMDb Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header></Header>
        {/* Navbar */}

        {/* SearchBox */}
        {children}
      </body>
    </html>
  );
}
