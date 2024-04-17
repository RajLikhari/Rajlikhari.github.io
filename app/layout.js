import "./globals.css";
import Header from "./shared/header/header";

export const metadata = {
  title: "Raj Likhari",
  description: "Developed with Love by Raj Likhari",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
